import { Component, OnInit } from '@angular/core';
import citation_network from "../../assets/citation/network.json";
import xaipapers from "../../assets/data/xaipapers.json";


@Component({
  selector: 'app-citation-graph',
  templateUrl: './citation-graph.component.html',
  styleUrls: ['./citation-graph.component.css']
})
export class CitationGraphComponent implements OnInit {

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
            text: 'Citation Network',
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
                data: this.network.nodes,
                links: this.network.links,
                // categories: categories,
                roam: true,
                focusNodeAdjacency: true,
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1,
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                },
                label: {
                    position: 'right',
                    formatter: '{b}'
                },
                lineStyle: {
                    color: 'red',
                    curveness: 0.5
                },
                emphasis: {
                    lineStyle: {
                        width: 5
                    }
                }
            }
        ]
    };
  }
  constructor() { }

  ngOnInit(): void {
    this.network = citation_network
    this.load_paper()

    
    console.log(this.network)
    this.render_graph()

  }

}
