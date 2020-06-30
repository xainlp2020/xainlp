import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import xaipapers from "../../assets/data/xaipapers.json";
import {PaperDialogComponent} from "../paper-dialog/paper-dialog.component";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface paperData{
  title: string,
  authors: string,
  year: number,
  venue: string,
  main_explainability: string,
  main_visualization: string,
  citation: number,
  link: string,
  placement: string,
  xai_type: string,
  nlp_task_1: string,
  parts_covered: string,
  type: string,
  evaluation_metrics: string,
  operations: string
}

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {

  /**
   * wordcloud_options
   */

  stopwords = new Set(["the", "from", "to", "can", "do", "does", "no", "not", "but", "and", "or", "nor", "an", "of", "for", "at", "on", "before",
  "after", "in", "out", "me", "could", "did", "done", "be", "with", "if", "because", "why", "is", "are", "were", "was",
  "we", "i", "you", "us", "a", "one", "two", "three", "four", "five", "six", "about", "up", "down", "off", "here", "this", "that", "these", 
  "those", "which", "what", "how", "when", "then", "therefore", "hence", "thus", "so", "very", "too", "its", "via", "model", "models",
  "&", ",", "=", "+", "any", "every", "each", "our", "their", "is", "was", "it", "it's", "his", "her", "they", "them", "me", "we", "she", "him", "he",
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "0", ".", "by", "as", "(", ")", "-", ".", "@", "'", "<", ">", "%", "both", "neither",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","such","up",'down',
  "yet", "also", "either", "as", "over", "upon", "seven", "eight", "nine", "ten", "between", "methods", "method", "approach", "task", "tasks", "way", "ways",
  "into", "while", "whereas", "paper"])

  wordcloud_options;
  wordcloud_shape = "circle"
  wordcloudChartInstance;
  wordcloud_threshold = 4
  wordcloudInit(event)
  {
    this.wordcloudChartInstance = event
  }
   render_wordcloud()
   {
     /**
      * process title and abstract
      */
     var word_count = {}
     for(var i = 0 ; i < this.all_survived_papers.length; i++)
     {
       var paper = this.all_survived_papers[i]

       // get title
       var title = paper['title'].trim()
       var abstract = paper['abstract'].trim()
       var explainability = paper['explainability']
       var visualization = paper['visualization']
       var operations = paper['operations']
       var nlp_task = paper['nlp_task_1']
       
       var concatenation =  title + " " + abstract + " " + explainability 
                            + " " + visualization + " " + operations + " " + nlp_task;


       var words = concatenation.split(/[\s.]+/g)
        .map(w => w.replace(/^[“‘"\-—()\[\]{}]+/g, ""))
        .map(w => w.replace(/[;:.!?()\[\]{},"'’”\-—]+$/g, ""))
        .map(w => w.replace(/['’]s$/g, ""))
        .map(w => w.substring(0, 30))
        .map(w => w.toLowerCase())
        .filter(w => w && !this.stopwords.has(w))

       for(var j = 0; j < words.length; j++)
       {
         var word = words[j];
         if(word in word_count)
         {
           word_count[word] = word_count[word] + 1
         }
         else{
           word_count[word] = 1
         }
       }
     }
     var wordcloud_data = []
     for(word in word_count)
     {
       if(word_count[word] < this.wordcloud_threshold)
       {
         continue
       }
        var tmp = {
          name: word,
          value: word_count[word]
        }
        wordcloud_data.push(tmp)
     }
     console.log("word cloud")
     console.log(word_count)
     console.log(wordcloud_data)
      this.wordcloud_options = {
        tooltip: {},
        // title:
        // {
        //   text: "word cloud of selected papers"
        // },
        series: [ {
            type: 'wordCloud',
            gridSize: 2,
            sizeRange: [7, 40],
            rotationRange: [-90, 90],
            shape: this.wordcloud_shape,
            width: 500,
            height: 400,
            drawOutOfBound: false,
            textStyle: {
                normal: {
                    color: function () {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: wordcloud_data
        } ]
    };
   }
  

  all_papers = []
  ngOnInit(): void {

    this.init_exp_viz_selection();

    console.log(xaipapers)

    this.process_papers_local_post();
    this.process_papers_local_self();
    this.process_papers_global_post();
    this.process_papers_global_self();

    console.log("CHECKING DATA")
    console.log(this.local_post)
    console.log(this.local_self)
    console.log(this.global_post)
    console.log(this.global_self)

    console.log("All exp values")
    console.log(this.all_exp_values)

    console.log("All viz values")
    console.log(this.all_viz_values)

    this.render_scatter()
    this.render_paper_dist_overall()
    this.render_exp_dist_overall()
    this.render_viz_dist_overall()
    this.render_venue_dist_overall()

    this.render_wordcloud();
  }

  /**
   * Visualization for venues
   */
  venue_dist_overall_options;
  render_venue_dist_overall()
  {
    var venue_set = {}
    var dist_data = []
    // prepare data
    for(var i = 0; i < this.all_survived_papers.length; i++)
    {
      console.log("checking " + this.all_survived_papers[i])
      var venue = this.all_survived_papers[i]["venue"].toUpperCase();
      if (venue in venue_set)
      {
        venue_set[venue] = venue_set[venue] + 1
      }
      else{
        venue_set[venue] = 0
      }
    }
    for(var key in venue_set)
    {
      dist_data.push({
        name: key + " (" + venue_set[key] + ")",
        value: venue_set[key]
      })
    }

    this.venue_dist_overall_options = {
      title:
      {
        text: "Venue distribution",
        left: "center",
        textStyle:
        {
          fontSize: 15
        }
      },
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      label:
      {
        fontSize: 12
      },
      series: [
        {
            name: 'Venue',
            type: 'pie',
            radius: [10, 50],
            center: ['50%', '50%'],
            data: dist_data,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
      ]
    }
  }

  /**
   * Visualization for viz techniques
   */
  viz_dist_overall_options;
  render_viz_dist_overall()
  {
    var viz_set = {}
    var dist_data = []
    // prepare data
    for(var i = 0; i < this.all_survived_papers.length; i++)
    {
      console.log("checking " + this.all_survived_papers[i])
      var viz = this.all_survived_papers[i]["main_visualization"].toUpperCase();
      if(viz.indexOf(" ")>0)
      {
        viz = viz.replace(" ", "\n")
      }
      if (viz in viz_set)
      {
        viz_set[viz] = viz_set[viz] + 1
      }
      else{
        viz_set[viz] = 0
      }
    }
    for(var key in viz_set)
    {
      dist_data.push({
        name: key + " (" + viz_set[key] + ")",
        value: viz_set[key]
      })
    }

    this.viz_dist_overall_options = {

      title:
      {
        text: "Visualization techniques distribution",
        left: "center",
        textStyle:
        {
          fontSize: 15
        }
      },
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      label:
      {
        fontSize: 10
      },
      series: [
        {
            name: 'Visualization',
            type: 'pie',
            radius: [10, 50],
            center: ['50%', '50%'],
            data: dist_data,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
      ]
    }
  }
  /**
   * Visualization for explainability techniques
   */
  exp_dist_overall_options;
  render_exp_dist_overall()
  {
    var exp_set = {}
    var dist_data = []
    // prepare data
    for(var i = 0; i < this.all_survived_papers.length; i++)
    {
      console.log("checking " + this.all_survived_papers[i])
      var exp = this.all_survived_papers[i]["main_explainability"].toUpperCase().trim();
      if(exp.indexOf(" ")>0)
      {
        exp = exp.replace(" ", "\n")
      }

      if (exp in exp_set)
      {
        exp_set[exp] = exp_set[exp] + 1
      }
      else{
        exp_set[exp] = 0
      }
    }
    for(var key in exp_set)
    {
      dist_data.push({
        name: key + " (" + exp_set[key] + ")",
        value: exp_set[key]
      })
    }

    this.exp_dist_overall_options = {

      title:
      {
        text: "Explainability techniques distribution",
        left: "center",
        textStyle:
        {
          fontSize: 15
        }
      },
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      label:
      {
        fontSize: 12
      },
      series: [
        {
            name: 'Explainability',
            type: 'pie',
            radius: [10, 50],
            center: ['50%', '50%'],
            data: dist_data,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
      ]
    }
  }

  /**
   * Visualization for paper_dist_overall_options
   */
  paper_dist_overall_options;
  render_paper_dist_overall()
  {
    var seriesLabel = {
      normal: {
          show: true,
          textBorderColor: '#333',
          textBorderWidth: 2
      }
    }

    this.paper_dist_overall_options = {
        title:
        {
          text: "Paper distribution wrt type of explanation",
          left: "center",
          textStyle:
          {
            fontSize: 15
          }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // legend: {
        //     type: 'scroll',
        //     orient: 'horizontal',
        //     right: 10,
        //     data: ['Local Post-hoc', 'Local Self-explaining', 'Global Post-hoc', "Global Self-explaining"],
        // },
        series: [
            {
                name: 'overall',
                type: 'pie',
                radius: [0, 70],
                center: ['50%', '50%'],
                data: [
                  {
                    name : "Local Post-hoc" + " (" +  this.local_post.length + ")",
                    value : this.local_post.length
                  },
                  {
                    name: "Local Self-explaining" + " (" +  this.local_self.length + ")",
                    value: this.local_self.length
                  },
                  {
                    name: "Global Post-hoc" + " (" +  this.global_post.length + ")",
                    value: this.global_post.length
                  },
                  {
                    name: "Global Self-explaining" + " (" +  this.global_self.length + ")",
                    value: this.global_self.length
                  },

                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

  }

  /**
   * 
   * Two way bindings of exp selection
   */
  ex_driven_checked  = true;
  provenance_checked = true;
  feature_importance_checked = true;
  induction_checked  = true;
  surrogate_checked  = true;

  raw_example_checked = true;
  saliency_checked = true;
  raw_declarative_checked = true;
  natural_language_checked = true;
  other_checked = true;


  exp_selected = new Set();
  viz_selected = new Set();
  init_exp_viz_selection()
  {
    this.exp_selected.add("example-driven").add("provenance").add("feature importance").add("induction").add("surrogate model");
    this.viz_selected.add("raw examples").add("saliency").add("raw declarative").add("natural language").add("other");
  }

  update_exp_selection(exp, checkStatus)
  {
    if(checkStatus)
    {
      this.exp_selected.add(exp)
    }
    else{
      console.log("deleting " + exp)
      this.exp_selected.delete(exp)
    }
    console.log("current selection exp: " )
    console.log(this.exp_selected)
    this.update_cluster()
  }
  update_viz_selection(viz, checkStatus)
  {
    if(checkStatus)
    {
      this.viz_selected.add(viz)
    }
    else{
      console.log("deleting " + viz)
      this.viz_selected.delete(viz)
    }
    console.log("current selection exp: " )
    console.log(this.viz_selected)
    this.update_cluster()
  }

  overallPieChartInstance
  explainabilityPieChartInstance
  vizPieChartInstance
  VenuePieChartInstance

  overallPieChartInit(event)
  {
    this.overallPieChartInstance = event
  }
  explainabilityPieChartInit(event)
  {
    this.explainabilityPieChartInstance = event
  }
  vizPieChartInit(event)
  {
    this.vizPieChartInstance = event
  }
  VenuePieChartInit(event)
  {
    this.VenuePieChartInstance = event
  }

  clusterViewInstance;
  onChartInit(event)
  {
    console.log("chart initilization")
    console.log(event)
    this.clusterViewInstance = event
  }
  update_cluster()
  {
    this.all_survived_papers = []
    console.log("updating cluster")
    this.process_papers_local_post();
    this.process_papers_local_self();
    this.process_papers_global_post();
    this.process_papers_global_self();

    this.render_scatter()
    this.clusterViewInstance.setOption(this.options)

    this.render_paper_dist_overall()
    this.overallPieChartInstance.setOption(this.paper_dist_overall_options)
    
    this.render_exp_dist_overall()
    this.explainabilityPieChartInstance.setOption(this.exp_dist_overall_options)

    this.render_viz_dist_overall()
    this.vizPieChartInstance.setOption(this.viz_dist_overall_options)

    this.render_venue_dist_overall()
    this.VenuePieChartInstance.setOption(this.venue_dist_overall_options);

    this.render_wordcloud()
    this.wordcloudChartInstance.setOption(this.wordcloud_options);

    console.log("all papers size() = " + this.all_papers.length)
  }



  constructor(public dialog: MatDialog) { }
  options: any; 

  refinePapers(event)
  {
    console.log("refine paper")
    console.log(event)

    var attr = event.seriesName
    var sub_attr = event.name.substring(0, event.name.indexOf("(")-1)
    console.log("subb_attr " + sub_attr)

    if(attr.trim() == 'Visualization')
    {
      // this.viz_selected = new Set();
      // this.viz_selected.add(sub_attr.toLowerCase())
      // this.update_cluster()
    }
    else if(attr.trim() == "Explainability")
    {

    }
    else if(attr.trim() == "overall")
    {

    }
  }

  go2paper(event) 
  {
    /**
     * 
     *{name: "exp",         index: 4, text: "Explainability"},
      {name: "viz",         index: 5, text: "visualization"},
      {name: "title",       index: 6, text: "Title"},
      {name: "authors",     index: 7, text: "Authors"},
      {name: "year",        index: 8, text: "Year"},
      {name: "link",        index: 9, text: "Link"},
      {name: "venue",       index: 10, text: "Venue"},
      {name: "type",        index: 11, text: "Type"},
      {name: "nlp_task_1",        index: 12, text: "NLP TOPIC"},
      {name: "operations",        index: 13, text: "Explainability Operations"},
      {name: "Evaluation_metrics",        index: 14, text: "Evaluation Metrics"},
     */
    var exp_type = event.seriesName;
    var data = event.data

    var explainability = data[4];
    var visualization  = data[5];
    var title = data[6]
    var authors = data[7]
    var year = data[8]
    var link = data[9]
    var venue = data[10]
    var type = data[11]
    var nlp_taks = data[12]
    var operations = data[13]
    var evaluation_metrics = data[14]
    var xai_type = exp_type;
    var abstract = data[15]
    var id = data[16]
    var num_preview_img = data[17]
    
    var selectedPaper = {
      "id": id,
      "abstract": abstract,
      "main_explainability": explainability,
      "main_visualization": visualization,
      "title": title,
      "authors": authors,
      "year": year,
      "link": link,
      "venue": venue,
      "type": type,
      "nlp_task_1": nlp_taks,
      "operations": operations,
      "evaluation_metrics": evaluation_metrics,
      "num_preview_img": num_preview_img
    }
    this.viewPaper(selectedPaper, xai_type);
  }
  viewPaper(selectedPaper, xai_type) {
    selectedPaper["xai_type"] = xai_type
    console.log("xai_type "+ xai_type);
    this.dialog.open(PaperDialogComponent, {
      data: selectedPaper
    });
  }

  symbol_size = 14;
  random_step_size = 2.5
  
  render_scatter()
  {
    var paper_schema = [
      {name: "rand_exp",    index: 0, text: "Random Exp Index"},
      {name: "rand_viz",    index: 1, text: "Random Viz Index"},
      {name: "exp_index",   index: 2, text: "Exp Index"},
      {name: "viz_index",   index: 3, text: "Viz Index"},
      {name: "exp",         index: 4, text: "Explainability"},
      {name: "viz",         index: 5, text: "visualization"},
      {name: "title",       index: 6, text: "Title"},
      {name: "authors",     index: 7, text: "Authors"},
      {name: "year",        index: 8, text: "Year"},
      {name: "link",        index: 9, text: "Link"},
      {name: "venue",       index: 10, text: "Venue"},
      {name: "type",        index: 11, text: "Type"},
      {name: "nlp_task_1",        index: 12, text: "NLP TOPIC"},
      {name: "operations",        index: 13, text: "Explainability Operations"},
      {name: "Evaluation_metrics",        index: 14, text: "Evaluation Metrics"},
      {name: "abstract",          index: 15, text: "Abstract"},
      {name: "id",                index: 16, text: "id"},
      {name: "num_preview_img",   index: 17, text: "num_preview_img"}
    ]
    
    
    var itemStyle = {
        opacity: 0.7,
        // shadowBlur: 10,
        // shadowOffsetX: 0,
        // shadowOffsetY: 0,
        // shadowColor: 'rgba(0, 0, 0, 0.5)'
    };
    
    /**
     *  EXAMPLE-DRIVEN: 0
        "FEATURE↵IMPORTANCE": 0
        INDUCTION: 0
        PROVENANCE: 0
        "SURROGATE↵MODEL": 0
    */
    var exp2x = {
      "EXAMPLE-DRIVEN": 5,
      "PROVENANCE": 10,
      "FEATURE\nIMPORTANCE": 15,
      "INDUCTION": 20,
      "SURROGATE\nMODEL": 25
    }
    var x2exp = {}
    Object.entries(exp2x).forEach(([key, value]) => {
      x2exp[value] = key
    });
    

    console.log("X2EXP")
    console.log(x2exp)

    /**
     * "NATURAL↵LANGUAGE": 0
        OTHER: 0
        "RAW↵EXAMPLES": 0
        "RAW↵SYMBOLIC": 0
        SALIENCY: 0
        "SYMBOLIC↵REP": 0
    */
    var y2viz = {}
    var viz2y = {
      "OTHER": 5,
      "RAW\nDECLARATIVE": 10,
      "SALIENCY": 15,
      "RAW\nEXAMPLES": 20,
      "NATURAL\nLANGUAGE": 25

    }
    Object.entries(viz2y).forEach(([key, value]) => {
      y2viz[value] = key
    });



    var local_post_data = []
    for(var i = 0; i < this.local_post.length; i++)
    {
      var example = this.local_post[i]
      var exp_technique = example[0]
      var viz_technique = example[1]

      // convert visualization to number
      var viz_tech_index = viz2y[viz_technique]
      example.unshift(viz_tech_index)

      // convert explainability to number, later, it must be an integer with random perturbation
      var exp_tech_index = exp2x[exp_technique]
      example.unshift(exp_tech_index)

      var rand_viz_perturbation = Math.random()*this.random_step_size
      var rand_exp_perturbation = Math.random()*this.random_step_size
      
      var random_sign = Math.random()
      if (random_sign >= 0.5)
      {
        random_sign = 1
      }
      else{
        random_sign = -1
      }
      var randomized_viz = viz_tech_index + random_sign * rand_viz_perturbation;
      example.unshift(randomized_viz)
      random_sign = Math.random()
      if (random_sign >= 0.5)
      {
        random_sign = 1
      }
      else{
        random_sign = -1
      }
      var randomized_exp = exp_tech_index + random_sign * rand_exp_perturbation;
      example.unshift(randomized_exp)

      local_post_data.push(example)
    }
    

    var local_self_data = []
    for(var i = 0; i < this.local_self.length; i++)
    {
      var example = this.local_self[i]
      var exp_technique = example[0]
      var viz_technique = example[1]

      // convert visualization to number
      var viz_tech_index = viz2y[viz_technique]
      example.unshift(viz_tech_index)

      // convert explainability to number, later, it must be an integer with random perturbation
      var exp_tech_index = exp2x[exp_technique]
      example.unshift(exp_tech_index)

      var rand_viz_perturbation = Math.random()*this.random_step_size
      var rand_exp_perturbation = Math.random()*this.random_step_size
      
      var random_sign = Math.random()
      if (random_sign >= 0.5)
      {
        random_sign = 1
      }
      else{
        random_sign = -1
      }
      var randomized_viz = viz_tech_index + random_sign * rand_viz_perturbation;
      example.unshift(randomized_viz)
      random_sign = Math.random()
      if (random_sign >= 0.5)
      {
        random_sign = 1
      }
      else{
        random_sign = -1
      }
      var randomized_exp = exp_tech_index + random_sign * rand_exp_perturbation;
      example.unshift(randomized_exp)

      local_self_data.push(example)
    }
    console.log("length of local self :" + local_self_data.length)

    var global_post_data = []
    for(var i = 0; i < this.global_post.length; i++)
    {
      var example = this.global_post[i]
      var exp_technique = example[0]
      var viz_technique = example[1]

      // convert visualization to number
      var viz_tech_index = viz2y[viz_technique]
      example.unshift(viz_tech_index)

      // convert explainability to number, later, it must be an integer with random perturbation
      var exp_tech_index = exp2x[exp_technique]
      example.unshift(exp_tech_index)

      var rand_viz_perturbation = Math.random()*this.random_step_size
      var rand_exp_perturbation = Math.random()*this.random_step_size
      
      var random_sign = Math.random()
      if (random_sign >= 0.5)
      {
        random_sign = 1
      }
      else{
        random_sign = -1
      }
      var randomized_viz = viz_tech_index + random_sign * rand_viz_perturbation;
      example.unshift(randomized_viz)
      random_sign = Math.random()
      if (random_sign >= 0.5)
      {
        random_sign = 1
      }
      else{
        random_sign = -1
      }
      var randomized_exp = exp_tech_index + random_sign * rand_exp_perturbation;
      example.unshift(randomized_exp)

      global_post_data.push(example)
    }
    
    var global_self_data = []
    for(var i = 0; i < this.global_self.length; i++)
    {
      var example = this.global_self[i]
      var exp_technique = example[0]
      var viz_technique = example[1]

      // convert visualization to number
      var viz_tech_index = viz2y[viz_technique]
      example.unshift(viz_tech_index)

      // convert explainability to number, later, it must be an integer with random perturbation
      var exp_tech_index = exp2x[exp_technique]
      example.unshift(exp_tech_index)

      var rand_viz_perturbation = Math.random()*this.random_step_size
      var rand_exp_perturbation = Math.random()*this.random_step_size
      
      var random_sign = Math.random()
      if (random_sign >= 0.5)
      {
        random_sign = 1
      }
      else{
        random_sign = -1
      }
      var randomized_viz = viz_tech_index + random_sign * rand_viz_perturbation;
      example.unshift(randomized_viz)
      random_sign = Math.random()
      if (random_sign >= 0.5)
      {
        random_sign = 1
      }
      else{
        random_sign = -1
      }
      var randomized_exp = exp_tech_index + random_sign * rand_exp_perturbation;
      example.unshift(randomized_exp)

      global_self_data.push(example)
    }
  

    

    this.options = {
        backgroundColor: '#f1f1f1',
        color: [
            "blue", '#dd4444', "#45b300", "black"
        ],
        legend: {
            backgroundColor: "transparent",
            top: 10,
            data: ["local post-hoc", "local self-explaining", "global post-hoc", "global self-explaining"],
            textStyle: {
                color: 'black',
                fontSize: 16,
            }
        },
        grid: {
            left: '10%',
            right: 150,
            top: '18%',
            bottom: '10%',

        },
        tooltip: {
            padding: 10,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            formatter: function (obj) {
                var value = obj.value;
                return  "<div class='w3-conten w3-center'>" + 
                    "<b class='w3-text-yellow w3-padding-small'>" + paper_schema[6].text  + "</b>" + '：' + value[6] + '<br>' // title
                    + "<b class='w3-text-yellow w3-padding-small'>" + paper_schema[7].text  + "</b>" + '：' + value[7] + '<br>' // authors
                    // + "<b class='w3-text-yellow w3-padding-small'>" + paper_schema[4].text  + "</b>" + '：' + value[4] + '<br>' // exp
                    // + "<b class='w3-text-yellow w3-padding-small'>" + paper_schema[5].text  + "</b>" + '：' + value[5] + '<br>' // viz
                    + "</div>"
            }
        },
        xAxis: {
            type: 'value',
            name: '',
            nameGap: 106,
            nameTextStyle: {
                color: '#fff',
                fontSize: 14
            },
            
            splitLine: {
                show: true,
                lineStyle:
                {
                  color: "grey",
                  type: "dashed"
                }
                
            },
            axisLine: {
                lineStyle: {
                    color: 'black',
                }
            },
            interval: 5,
            axisLabel:{
              formatter: function(value, index){
                if (x2exp[value] != undefined)
                {
                  return x2exp[value]
                }
                else{
                  return ""
                }
              }
            }
        },
        yAxis: {
            type: 'value',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
                color: '#fff',
                fontSize: 16
            },
            axisLine: {
                lineStyle: {
                    color: 'black'
                }
            },
            splitLine: {
                show: true,
                lineStyle:
                {
                  color: "grey",
                  type: "dashed"
                }
            },
            interval: 5,
            axisLabel:{
              formatter: function(value, index){
                if (y2viz[value] != undefined)
                {
                  return y2viz[value]
                }
                else{
                  return ""
                }
              }
            }
        },
        series: [
            {
                name: 'local post-hoc',
                type: 'scatter',
                symbolSize: this.symbol_size,
                itemStyle: itemStyle,
                data: local_post_data,
                // xAxisIndex: 2,
                // yAxisIndex: 3
            },
            {
              name: 'local self-explaining',
              type: 'scatter',
              symbolSize: this.symbol_size,
              itemStyle: itemStyle,
              data: local_self_data,
              // xAxisIndex: 2,
              // yAxisIndex: 3
            },
            {
              name: 'global post-hoc',
              type: 'scatter',
              symbolSize: this.symbol_size,
              itemStyle: itemStyle,
              data: global_post_data,
              // xAxisIndex: 2,
              // yAxisIndex: 3
            },
            {
              name: 'global self-explaining',
              type: 'scatter',
              symbolSize: this.symbol_size,
              itemStyle: itemStyle,
              data: global_self_data,
            }
        ]
    };
  }

  // export interface paperData{
  //   title: string,
  //   authors: string,
  //   year: number,
  //   venue: string,
  //   main_explainability: string,
  //   main_visualization: string,
  //   citation: number,
  //   link: string,
  //   placement: string,
  //   xai_type: string,
  //   nlp_task_1: string,
  //   parts_covered: string,
  //   type: string,
  //   evaluation_metrics: string,
  //   operations: string
  // }

  // var paper_schema = [
  //   {name: "rand_exp",    index: 0, text: "Random Exp Index"},
  //   {name: "rand_viz",    index: 1, text: "Random Viz Index"},
  //   {name: "exp_index",   index: 2, text: "Exp Index"},
  //   {name: "viz_index",   index: 3, text: "Viz Index"},
  //   {name: "exp",         index: 4, text: "Explainability"},
  //   {name: "viz",         index: 5, text: "visualization"},
  //   {name: "title",       index: 6, text: "Title"},
  //   {name: "type",        index: 7, text: "Type of Explanation"},
  //   {name: "authors",     index: 8, text: "Authors"}
  // ]
  local_post = new Array()
  local_self = []
  global_post = []
  global_self = []

  all_exp_values = {}
  all_viz_values = {}

  all_survived_papers = []

  process_papers_local_self() 
  {
    this.local_self = []
    for(var i = 0; i < xaipapers["local-self"].length; i++)
    {
      var paper = xaipapers["local-self"][i]
      this.all_papers.push(paper);
      if(!this.exp_selected.has(paper["main_explainability"].toLowerCase()) || !this.viz_selected.has(paper["main_visualization"].toLowerCase()))
      {
        // console.log(paper["main_explainability"] + " not in selected exp, so skip")
        continue
      }
      this.all_survived_papers.push(paper)
      var new_paper = [
        paper["main_explainability"].toUpperCase().replace(" ", "\n"),
        paper["main_visualization"].toUpperCase().replace(" ", "\n"),
        paper["title"],
        paper["authors"],
        paper["year"],
        paper["link"],
        paper["venue"],
        paper["type"],
        paper["nlp_task_1"],
        paper["operations"],
        paper["evaluation_metrics"],
        paper['abstract'],
        paper['id'],
        paper["num_preview_img"]
      ]
      this.all_exp_values[paper["main_explainability"].toUpperCase().replace(" ", "\n")] = 0
      this.all_viz_values[paper["main_visualization"].toUpperCase().replace(" ", "\n")] = 0

      this.local_self.push(new_paper);
    }
  }
  process_papers_local_post() 
  {
    this.local_post = []
    for(var i = 0; i < xaipapers["local-post-hoc"].length; i++)
    {
      var paper = xaipapers["local-post-hoc"][i]
      this.all_papers.push(paper);
      if(!this.exp_selected.has(paper["main_explainability"].toLowerCase()) || !this.viz_selected.has(paper["main_visualization"].toLowerCase()))
      {
        console.log(paper["main_explainability"] + " not in selected exp, so skip")
        continue
      }
      this.all_survived_papers.push(paper)
      var new_paper = [
        paper["main_explainability"].toUpperCase().replace(" ", "\n"),
        paper["main_visualization"].toUpperCase().replace(" ", "\n"),
        paper["title"],
        paper["authors"],
        paper["year"],
        paper["link"],
        paper["venue"],
        paper["type"],
        paper["nlp_task_1"],
        paper["operations"],
        paper["evaluation_metrics"],
        paper['abstract'],
        paper['id'],
        paper["num_preview_img"]
      ]
      this.all_exp_values[paper["main_explainability"].toUpperCase().replace(" ", "\n")] = 0
      this.all_viz_values[paper["main_visualization"].toUpperCase().replace(" ", "\n")] = 0
      this.local_post.push(new_paper);
    }
  }
  process_papers_global_self() 
  {
    this.global_self = [];
    for(var i = 0; i < xaipapers["global-self"].length; i++)
    {
      var paper = xaipapers["global-self"][i]
      this.all_papers.push(paper);
      if(!this.exp_selected.has(paper["main_explainability"].toLowerCase()) || !this.viz_selected.has(paper["main_visualization"].toLowerCase()))
      {
        console.log(paper["main_explainability"] + " not in selected exp, so skip")
        continue
      }
      this.all_survived_papers.push(paper)
      var new_paper = [
        paper["main_explainability"].toUpperCase().replace(" ", "\n"),
        paper["main_visualization"].toUpperCase().replace(" ", "\n"),
        paper["title"],
        paper["authors"],
        paper["year"],
        paper["link"],
        paper["venue"],
        paper["type"],
        paper["nlp_task_1"],
        paper["operations"],
        paper["evaluation_metrics"],
        paper['abstract'],
        paper['id'],
        paper["num_preview_img"]
      ]
      this.all_exp_values[paper["main_explainability"].toUpperCase().replace(" ", "\n")] = 0
      this.all_viz_values[paper["main_visualization"].toUpperCase().replace(" ", "\n")] = 0
      this.global_self.push(new_paper);
    }
  }
  process_papers_global_post() 
  {
    this.global_post = []
    for(var i = 0; i < xaipapers["global-post-hoc"].length; i++)
    {
      var paper = xaipapers["global-post-hoc"][i]
      this.all_papers.push(paper);
      if(!this.exp_selected.has(paper["main_explainability"].toLowerCase()) || !this.viz_selected.has(paper["main_visualization"].toLowerCase()))
      {
        console.log(paper["main_explainability"] + " not in selected exp, so skip")
        continue
      }
      this.all_survived_papers.push(paper)
      var new_paper = [
        paper["main_explainability"].toUpperCase().replace(" ", "\n"),
        paper["main_visualization"].toUpperCase().replace(" ", "\n"),
        paper["title"],
        paper["authors"],
        paper["year"],
        paper["link"],
        paper["venue"],
        paper["type"],
        paper["nlp_task_1"],
        paper["operations"],
        paper["evaluation_metrics"],
        paper['abstract'],
        paper['id'],
        paper["num_preview_img"]
      ]
      this.all_exp_values[paper["main_explainability"].toUpperCase().replace(" ", "\n")] = 0
      this.all_viz_values[paper["main_visualization"].toUpperCase().replace(" ", "\n")] = 0
      this.global_post.push(new_paper);
    }
  }

  
}
