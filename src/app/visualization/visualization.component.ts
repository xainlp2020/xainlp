import { Component, OnInit } from '@angular/core';
import xaipapers from "../../assets/data/xaipapers.json";


@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {

  constructor() { }
  options: any; 

  go2paper(event) 
  {
    console.log(event)
    console.log("GOING TO PAPER");
  }


  
  render_scatter()
  {

    
    var dataBJ = [
      [1,55,9,56,0.46,18,6,"良"],
      [2,25,11,21,0.65,34,9,"优"],
      [3,56,7,63,0.3,14,5,"良"],
      [4,33,7,29,0.33,16,6,"优"],
      [4.6,33.5,7,29,0.33,16,6,"优"],
      [4.5,33.4,7,29,0.33,16,6,"优"],
    ];
    var schema = [
        {name: 'date', index: 0, text: '日'},
        {name: 'AQIindex', index: 1, text: 'AQI指数'},
        {name: 'PM25', index: 2, text: 'PM2.5'},
        {name: 'PM10', index: 3, text: 'PM10'},
        {name: 'CO', index: 4, text: '一氧化碳（CO）'},
        {name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
        {name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
    ];

    var paper_schema = [
      {name: "rand_exp",    index: 0, text: "Random Exp Index"},
      {name: "rand_viz",    index: 1, text: "Random Viz Index"},
      {name: "exp_index",   index: 2, text: "Exp Index"},
      {name: "viz_index",   index: 3, text: "Viz Index"},
      {name: "exp",         index: 4, text: "Explainability"},
      {name: "viz",         index: 5, text: "visualization"},
      {name: "title",       index: 6, text: "Title"},
      {name: "type",        index: 7, text: "Type of Explanation"},
      {name: "authors",     index: 8, text: "Authors"}
    ]
    
    
    var itemStyle = {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
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
      "RAW\nSYMBOLIC": 10,
      "SYMBOLIC\nREP": 10,
      "SALIENCY": 15,
      "RAW\nEXAMPLES": 20,
      "NATURAL\nLANGUAGE": 25

    }
    Object.entries(viz2y).forEach(([key, value]) => {
      y2viz[value] = key
    });

    var random_step_size = 2

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

      var rand_viz_perturbation = Math.random()*random_step_size
      var rand_exp_perturbation = Math.random()*random_step_size
      
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

      var rand_viz_perturbation = Math.random()*random_step_size
      var rand_exp_perturbation = Math.random()*random_step_size
      
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

      var rand_viz_perturbation = Math.random()*random_step_size
      var rand_exp_perturbation = Math.random()*random_step_size
      
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

      var rand_viz_perturbation = Math.random()*random_step_size
      var rand_exp_perturbation = Math.random()*random_step_size
      
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
        backgroundColor: '#404a59',
        color: [
            '#dd4444', '#fec42c', '#80F1BE'
        ],
        legend: {
            top: 10,
            data: ["local post-hoc", "local self-explaining", "global post-hoc", "global self-explaining"],
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        },
        grid: {
            left: '10%',
            right: 150,
            top: '18%',
            bottom: '10%'
        },
        tooltip: {
            padding: 10,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            formatter: function (obj) {
                var value = obj.value;
                return   paper_schema[0].text + '：' + value[0] + '<br>'
                    + paper_schema[1].text + '：' + value[1] + '<br>'
                    + paper_schema[2].text + '：' + value[2] + '<br>'
                    + paper_schema[3].text + '：' + value[3] + '<br>'
                    + paper_schema[4].text + '：' + value[4] + '<br>'
                    + paper_schema[5].text + '：' + value[5] + '<br>'
                    + paper_schema[6].text + '：' + value[6] + '<br>'
                    + paper_schema[7].text + '：' + value[7] + '<br>'
                // return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                //     + obj.seriesName + ' ' + value[0] + '日：'
                //     + value[7]
                //     + '</div>'
                //     + paper_schema[1].text + '：' + value[1] + '<br>'
                //     + schema[2].text + '：' + value[2] + '<br>'
                //     + schema[3].text + '：' + value[3] + '<br>'
                //     + schema[4].text + '：' + value[4] + '<br>'
                //     + schema[5].text + '：' + value[5] + '<br>'
                //     + schema[6].text + '：' + value[6] + '<br>';
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
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
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
                    color: '#eee'
                }
            },
            splitLine: {
                show: false
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
                symbolSize: 15,
                itemStyle: itemStyle,
                data: local_post_data,
                // xAxisIndex: 2,
                // yAxisIndex: 3
            },
            {
              name: 'local self-explaining',
              type: 'scatter',
              symbolSize: 15,
              itemStyle: itemStyle,
              data: local_self_data,
              // xAxisIndex: 2,
              // yAxisIndex: 3
            },
            {
              name: 'global post-hoc',
              type: 'scatter',
              symbolSize: 15,
              itemStyle: itemStyle,
              data: global_post_data,
              // xAxisIndex: 2,
              // yAxisIndex: 3
            },
            {
              name: 'global self-explaining',
              type: 'scatter',
              symbolSize: 15,
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

  process_papers_local_self() 
  {
    for(var i = 0; i < xaipapers["local-self"].length; i++)
    {
      var paper = xaipapers["local-self"][i]
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
      ]
      this.all_exp_values[paper["main_explainability"].toUpperCase().replace(" ", "\n")] = 0
      this.all_viz_values[paper["main_visualization"].toUpperCase().replace(" ", "\n")] = 0

      this.local_self.push(new_paper);
    }
  }
  process_papers_local_post() 
  {
    for(var i = 0; i < xaipapers["local-post-hoc"].length; i++)
    {
      var paper = xaipapers["local-post-hoc"][i]
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
      ]
      this.all_exp_values[paper["main_explainability"].toUpperCase().replace(" ", "\n")] = 0
      this.all_viz_values[paper["main_visualization"].toUpperCase().replace(" ", "\n")] = 0
      this.local_post.push(new_paper);
    }
  }
  process_papers_global_self() 
  {
    for(var i = 0; i < xaipapers["global-self"].length; i++)
    {
      var paper = xaipapers["global-self"][i]
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
      ]
      this.all_exp_values[paper["main_explainability"].toUpperCase().replace(" ", "\n")] = 0
      this.all_viz_values[paper["main_visualization"].toUpperCase().replace(" ", "\n")] = 0
      this.global_self.push(new_paper);
    }
  }
  process_papers_global_post() 
  {
    for(var i = 0; i < xaipapers["global-post-hoc"].length; i++)
    {
      var paper = xaipapers["global-post-hoc"][i]
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
      ]
      this.all_exp_values[paper["main_explainability"].toUpperCase().replace(" ", "\n")] = 0
      this.all_viz_values[paper["main_visualization"].toUpperCase().replace(" ", "\n")] = 0
      this.global_post.push(new_paper);
    }
  }

  ngOnInit(): void {

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
  }

}
