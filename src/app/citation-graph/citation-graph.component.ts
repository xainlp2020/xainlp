import { Component, OnInit } from '@angular/core';
import citation_network from "../../assets/citation/network.json";
import xaipapers from "../../assets/data/xaipapers.json";
import { Options } from 'ng5-slider';
import { P } from '@angular/cdk/keycodes';
import {PaperDialogComponent} from "../paper-dialog/paper-dialog.component";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-citation-graph',
  templateUrl: './citation-graph.component.html',
  styleUrls: ['./citation-graph.component.css']
})
export class CitationGraphComponent implements OnInit {

  viewPaper(event) {
    console.log(event)
    var selectedPaper = event.data.info
    selectedPaper["xai_type"] = this.placement2type[selectedPaper['placement']]
    this.dialog.open(PaperDialogComponent, {
      data: selectedPaper
    });
  }

  /**
   * slider config
   * hard coded for now, should change to programmatically read the start year and end year from citation network json records
   */
  startYear = 2013
  endYear   = 2019
  year_value: number = this.startYear;
  year_options: Options = {
    floor: this.startYear,
    ceil: this.endYear,
    step: 1,
    showTicks: true,
    showTicksValues: true
  };
  showEvolution()
  {
    this.year_value = this.startYear
    console.log("start evolution")
    console.log(this.year_value)
    // this.year_value += 1
    console.log(this.year_value)

    var num_iteration = this.endYear - this.startYear
    var counter = 0
    var interval = setInterval(() =>
    {
      counter += 1
      this.year_value = this.year_value + 1
      console.log("year_value " + this.year_value)
      this.render_graph()
      this.networkInstance.setOption(this.citation_net_options)
      if(counter === num_iteration)
      {
        clearInterval(interval)
      }
    }, 1000)
  }

  /**
   * year-based graphs
   */
  symbolsize = 15;
  updateYear(event)
  {
    console.log("year update")
    console.log(event)
    var newYearVal = event.value
    this.year_value = newYearVal
    this.render_graph()
    this.networkInstance.setOption(this.citation_net_options)
  }
  graphs;
  all_papers = []
  placement2type = {
    "1": "Local Post-hoc",
    "2": "Local Self-explaining",
    "3": "Global Post-hoc",
    "4": "Global Self-explaining"
  }
  placement2id = {
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4
  }
  canvas_width = 300
  canvas_height = 300
  exp_categories = []
  prepareGraphs()
  {
    this.exp_categories = [
      {
        name: 'Local Post-hoc'
      },
      {
        name: 'Local Self-explaining'
      },
      {
        name: 'Global Post-hoc'
      },
      {
        name: 'Global Self-explaining'
      }
    ]
    this.graphs = []
    for(var start = this.startYear; start <= this.endYear; start++)
    {
      this.graphs[start] = {
        links: [],
        nodes: []
      }
    }

    this.load_all_papers()

    console.log("preparing graphs")
    console.log(this.graphs)
    // create graph nodes from papers based on year of publication
    for(var i = 0; i < this.all_papers.length; i++)
    {
      var paper = this.all_papers[i]
      var year = paper['year']
      var paper_id = paper['id']
      var paper_info = paper
      var citation = paper['citation']
      var exp_type_id = this.placement2id[paper['placement']]

      var new_node = {
        category: exp_type_id,
        id: paper_id,
        name: this.titleCase(paper['title']), // could be the name of the proposed approach or the last name of the first author, not in current json record (as of July 2020),
        value: citation,
        symbolSize: this.symbolsize,
        x: Math.random() * this.canvas_width,
        y: Math.random() * this.canvas_height,
        info: paper_info
      }
      // console.log(year + " " + citation + " " + paper['title'])
      for(var curr = year; curr <= this.endYear; curr++)
      {
        this.graphs[curr].nodes.push(new_node)
      }
      // this.graphs[year].nodes.push(new_node)
    }
    console.log("final graphs")
    console.log(this.graphs)
  }

  //helper function
  titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

  load_all_papers()
  {
    for(var i = 0; i < xaipapers['local-post-hoc'].length; i++)
    {
      this.all_papers.push(xaipapers["local-post-hoc"][i])
    }
    for(var i = 0; i < xaipapers['local-self'].length; i++)
    {
      this.all_papers.push(xaipapers["local-self"][i])
    }
    for(var i = 0; i < xaipapers['global-post-hoc'].length; i++)
    {
      this.all_papers.push(xaipapers["global-post-hoc"][i])
    }
    for(var i = 0; i < xaipapers['global-self'].length; i++)
    {
      this.all_papers.push(xaipapers["global-self"][i])
    }
    var tmp = JSON.stringify(this.all_papers).toLowerCase()
    this.all_papers = JSON.parse(tmp)
  }


  seed = 2
  testRandom()
  {
    var i = 0
    while ( i < 30)
    {
      var r = this.randomFn(0,1,this.seed)
      console.log(r)
      this.seed += 1
      i += 1
    }
  }
  randomFn(min, max, seed)
  {
    max = max || 1;
    min = min || 0;
 
    seed = (seed * 9301 + 49297) % 233280;
    var rnd = seed / 233280;
 
    return min + rnd * (max - min);
  }


  /**
   * network config 
   * */


  citation_net_options;
  networkInstance
  network
  paper_lookup = {}
  load_paper()
  {
    var local_post  = xaipapers["local-post-hoc"]
    var local_self  = xaipapers["local-self"]
    var global_post = xaipapers["global-post-hoc"]
    var global_self = xaipapers["global-self"]

    this.process_paper(local_post)
    this.process_paper(local_self)
    this.process_paper(global_post)
    this.process_paper(global_self)

    console.log("paper_lookup")
    console.log(this.paper_lookup)

  }
  process_paper(papers)
  {
    for(var i = 0; i < papers.length; i++)
    {
      var paper = papers[i]
      var id = paper['id']
      this.paper_lookup[id] = paper
    }
  }
  onChartInit(event)
  {
    this.networkInstance = event
  }

  render_graph()
  {
    this.network.nodes.forEach(function (node) {
        node.itemStyle = {
          color: "black"
        };
        node.value = node.symbolSize;
        node.symbolSize /= 1.5;
        node.label = {
            show: node.symbolSize > 30
        };
        // node.category = node.attributes.modularity_class;
    });
    this.citation_net_options = {
        title: {
            text: 'Citation Graph',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},

        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                draggable: true,
                type: 'graph',
                layout: 'none',
                edgeSymbol: ["none", "arrow"],
                edgeSymbolSize: 6,
                data: this.graphs[this.year_value].nodes,
                links: this.graphs[this.year_value].links,
                categories: this.exp_categories,
                roam: true,
                focusNodeAdjacency: true,
                itemStyle: {
                  symbolSize: 20,
                },
                label: {
                    position: 'right',
                    formatter: '{b}'
                },
                lineStyle: {
                    color: 'red',
                    curveness: 0.05
                },
                emphasis: {
                    lineStyle: {
                        width: 3
                    }
                },
                tooltip:
                {
                  position: "bottom"
                }
            }
        ]
    };
  }
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.network = citation_network
    this.load_paper()

    
    console.log(this.network)
    this.prepareGraphs()
    this.render_graph()

    // this.testRandom()

  }

}
