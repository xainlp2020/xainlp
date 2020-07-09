import { Component, OnInit, Inject, Type } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import xaipapers from "../../assets/data/xaipapers.json";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PaperDialogComponent} from "../paper-dialog/paper-dialog.component";
import {DefinitionDialogComponent} from "../definition-dialog/definition-dialog.component";
import {Sort} from '@angular/material/sort';


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
  operations: string,
  abstract: string,
  id: string,
  num_preview_img: number
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {


  /**
   * clickable taxonomy related
   */
  books: any = []
  index: any = []
  node_d: boolean = false
  explanations : String = ''
  pnodes : any ={}
  
  nodes: any = {
    name: 'Type of explanation',
    split: ['Static', 'Interactive'],
    cssClass: 'selection-current',
    index:[0],   
    subordinates: [
      {
        name: 'Local',
        split: ['Data','Model'],
        cssClass: 'selection-not',
        index:[0,0],
        subordinates: [
          {
            name: 'Local Post-hoc',
            split:['Algorithms. ProtoDash, DIP-VAE'],
            cssClass: 'selection-not',
            index:[0,0,0],
            subordinates: []
          },

          {
            name: 'Local Self-explaining',
            cssClass: 'selection-not',
            split:['Local', 'Global'],
            index:[0,0,1],
            // designation: 'Explanation',
            subordinates: [ ]
          }
  
        ]
      },
      {
        name: 'Global',
        cssClass: 'selection-not',
        split:[],
        index:[0,1],
        // designation: 'Explanation',
        subordinates: [

          {
            name: 'Global Post-hoc',
            cssClass: 'selection-not',
            split:[],
            index:[0,1,0],
            // designation: 'Explanation',
            subordinates: []
          }, 

          {
            name: 'Global Self-explaining',
            cssClass: 'selection-not',
            split:[],
            index:[0,1,1],
            // designation: 'Explanation',
            subordinates: []
          }
        ]
      },
    ]
  };

  resetPath()
  {
    this.pnodes = this.nodes
    if(this.index.length < 2)
    {
      this.pnodes.cssClass = 'selection-not'
      return;
    }
    for(var i=1; i<this.index.length; i++)
    {
      this.pnodes.cssClass = 'selection-not';
      this.pnodes = this.pnodes.subordinates[this.index[i]]
    }
    this.pnodes.cssClass = 'selection-not';

    
  }
  selectPath()
  {
    
    this.pnodes = this.nodes
    if(this.index.length < 2)
    {
      this.pnodes.cssClass = 'selection-current'
      return;
    }
 
    for(var i=1; i<this.index.length; i++)
    {
     
      this.pnodes.cssClass = 'selection';
      this.pnodes = this.pnodes.subordinates[this.index[i]]
    }
    this.pnodes.cssClass = 'selection-current'

    if(this.node_d)
    {
      // this.books = data[this.pnodes.node_data]
    }


  }


  
  




   /** 
    * paper list
    * 
    */
  papers = xaipapers;

  local_posthoc = [];
  local_self  = [];
  global_posthoc = [];
  global_self = [];

  local_posthoc_sorted: paperData[]
  local_self_sorted: paperData[]
  global_posthoc_sorted: paperData[]
  global_self_sorted: paperData[]

  massage_data(target_records, records)
  {
    for(let i = 0; i < records.length; i++)
    {
      var record = records[i];
      var paper = {
        "title": record["title"],
        "authors": record["authors"],
        "year": Number(record["year"]),
        "venue": record["venue"],
        "main_explainability": record["main_explainability"],
        "main_visualization": record["main_visualization"],
        "citation": Number(record["citation"]),
        "link": record["link"],
        "placement": record["placement"],
        "xai_type": record["xai_type"],
        "nlp_task_1": record["nlp_task_1"],
        "parts_covered": record["parts_covered"],
        "type": record["type"],
        "evaluation_metrics": record["evaluation_metrics"],
        "operations": record["operations"],
        "abstract": record["abstract"],
        "id": record["id"],
        "num_preview_img": record["num_preview_img"]
       }
      target_records.push(paper)
    }
  }
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  selected_sorted
  sortData_selected(sort: Sort) {
    const data = this.selected_sorted.slice();
    if (!sort.active || sort.direction === '') {
      this.selected_sorted = data;
      return;
    }

    this.selected_sorted = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'year': return this.compare(a.year, b.year, isAsc);
        case 'main_explainability': return this.compare(a.main_explainability, b.main_explainability, isAsc);
        case 'main_visualization': return this.compare(a.main_visualization, b.main_visualization, isAsc);
        case 'citation': return this.compare(a.citation, b.citation, isAsc);
        case 'venue': return this.compare(a.venue, b.venue, isAsc);
        default: return 0;
      }
    });
  }

  sortData_local_posthoc(sort: Sort) {
    const data = this.local_posthoc.slice();
    if (!sort.active || sort.direction === '') {
      this.local_posthoc_sorted = data;
      return;
    }

    this.local_posthoc_sorted = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'year': return this.compare(a.year, b.year, isAsc);
        case 'main_explainability': return this.compare(a.main_explainability, b.main_explainability, isAsc);
        case 'main_visualization': return this.compare(a.main_visualization, b.main_visualization, isAsc);
        case 'citation': return this.compare(a.citation, b.citation, isAsc);
        case 'venue': return this.compare(a.venue, b.venue, isAsc);
        default: return 0;
      }
    });
  }

  sortData_local_self(sort: Sort) {
    const data = this.local_self.slice();
    if (!sort.active || sort.direction === '') {
      this.local_self_sorted = data;
      return;
    }

    this.local_self_sorted = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'year': return this.compare(a.year, b.year, isAsc);
        case 'main_explainability': return this.compare(a.main_explainability, b.main_explainability, isAsc);
        case 'main_visualization': return this.compare(a.main_visualization, b.main_visualization, isAsc);
        case 'citation': return this.compare(a.citation, b.citation, isAsc);
        case 'venue': return this.compare(a.venue, b.venue, isAsc);
        default: return 0;
      }
    });
  }
  sortData_global_posthoc(sort: Sort) {
    const data = this.global_posthoc.slice();
    if (!sort.active || sort.direction === '') {
      this.global_posthoc_sorted = data;
      return;
    }

    this.global_posthoc_sorted = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'year': return this.compare(a.year, b.year, isAsc);
        case 'main_explainability': return this.compare(a.main_explainability, b.main_explainability, isAsc);
        case 'main_visualization': return this.compare(a.main_visualization, b.main_visualization, isAsc);
        case 'citation': return this.compare(a.citation, b.citation, isAsc);
        case 'venue': return this.compare(a.venue, b.venue, isAsc);
        default: return 0;
      }
    });
  }

  sortData_global_self(sort: Sort) {
    const data = this.global_self.slice();
    if (!sort.active || sort.direction === '') {
      this.global_self_sorted = data;
      return;
    }

    this.global_self_sorted = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'year': return this.compare(a.year, b.year, isAsc);
        case 'main_explainability': return this.compare(a.main_explainability, b.main_explainability, isAsc);
        case 'main_visualization': return this.compare(a.main_visualization, b.main_visualization, isAsc);
        case 'citation': return this.compare(a.citation, b.citation, isAsc);
        case 'venue': return this.compare(a.venue, b.venue, isAsc);
        default: return 0;
      }
    });
  }


  selected_type = ""
  popup(e)
  {
    console.log(e)
    this.resetPath()
   
    // this.explanations = this.dialog(e.name)
    this.index = e.index
    if(e.node_data == undefined)
    {
      this.node_d = false
    }else
    {
      this.node_d = true
    }
    this.selectPath()
    this.selected_type = e.name

    if(this.selected_type === 'Local')
    {
      this.selected_sorted = []
      this.selected_sorted = this.selected_sorted.concat(this.local_posthoc_sorted)
      this.selected_sorted = this.selected_sorted.concat(this.local_self_sorted)
      this.selected_sorted = this.selected_sorted.sort((a, b) => {
        return this.compare(a.year, b.year, false);
      });
    }
    else if(this.selected_type === 'Global')
    {
      this.selected_sorted = []
      this.selected_sorted = this.selected_sorted.concat(this.global_posthoc_sorted)
      this.selected_sorted = this.selected_sorted.concat(this.global_self_sorted)

      this.selected_sorted = this.selected_sorted.sort((a, b) => {
        return this.compare(a.year, b.year, false);
      });
    }
    else if(this.selected_type === 'Local Self-explaining')
    {
      this.selected_sorted = []
      this.selected_sorted = this.selected_sorted.concat(this.local_self_sorted)

      this.selected_sorted = this.selected_sorted.sort((a, b) => {
        return this.compare(a.year, b.year, false);
      });
    }
    else if(this.selected_type === 'Local Post-hoc')
    {
      this.selected_sorted = []
      this.selected_sorted = this.selected_sorted.concat(this.local_posthoc_sorted)
      this.selected_sorted = this.selected_sorted.sort((a, b) => {
        return this.compare(a.year, b.year, false);
      });
    }
    else if(this.selected_type === 'Global Post-hoc')
    {
      this.selected_sorted = []
      this.selected_sorted = this.selected_sorted.concat(this.global_posthoc_sorted)

      this.selected_sorted = this.selected_sorted.sort((a, b) => {
        return this.compare(a.year, b.year, false);
      });
    }
    else if(this.selected_type === 'Global Self-explaining')
    {
      this.selected_sorted = []
      this.selected_sorted = this.selected_sorted.concat(this.global_self)

      this.selected_sorted = this.selected_sorted.sort((a, b) => {
        return this.compare(a.year, b.year, false);
      });
    }
    else{
      this.selected_type = "all"
      this.selected_sorted = []
      this.selected_sorted = this.selected_sorted.concat(this.local_posthoc_sorted)
      this.selected_sorted = this.selected_sorted.concat(this.local_self_sorted)
      this.selected_sorted = this.selected_sorted.concat(this.global_self)
      this.selected_sorted = this.selected_sorted.concat(this.global_posthoc_sorted)

      this.selected_sorted = this.selected_sorted.sort((a, b) => {
        return this.compare(a.year, b.year, false);
      });
    }
  }


  constructor(public dialog: MatDialog) {
    // this.dataSource.data = TREE_DATA;
    console.log(xaipapers);
    var local_posthoc_tmp  = xaipapers['local-post-hoc'];
    var local_self_tmp     = xaipapers['local-self'];
    var global_posthoc_tmp = xaipapers['global-post-hoc'];
    var global_self_tmp    = xaipapers['global-self'];

    this.massage_data(this.local_posthoc, local_posthoc_tmp);
    this.massage_data(this.local_self, local_self_tmp);
    this.massage_data(this.global_posthoc, global_posthoc_tmp);
    this.massage_data(this.global_self, global_self_tmp);

    console.log("TESTING")
    console.log(this.local_posthoc)
    console.log(this.local_self)
    console.log(this.global_posthoc)
    console.log(this.global_self)

    this.local_posthoc_sorted = this.local_posthoc.slice();
    this.local_self_sorted = this.local_self.slice();
    this.global_posthoc_sorted = this.global_posthoc.slice();
    this.global_self_sorted = this.global_self.slice();

    this.local_posthoc_sorted = this.local_posthoc.sort((a, b) => {
      return this.compare(a.year, b.year, false);
    });
    this.local_self_sorted = this.local_self.sort((a, b) => {
      return this.compare(a.year, b.year, false);
    });
    this.global_posthoc_sorted = this.global_posthoc.sort((a, b) => {
      return this.compare(a.year, b.year, false);
    });
    this.global_self_sorted = this.global_self.sort((a, b) => {
      return this.compare(a.year, b.year, false);
    });

    // for(let i = 0; i < local_posthoc_tmp.length; i++)
    // {
    //    var paper = {
    //     "title": local_posthoc_tmp["title"],
    //     "authors": local_posthoc_tmp["authors"],
    //     "year": local_posthoc_tmp["year"],
    //     "venue": local_posthoc_tmp["venue"],
    //     "main_explainability": local_posthoc_tmp["main_explainability"],
    //     "main_visualization": local_posthoc_tmp["main_visualization"],
    //     "citation": Number(local_posthoc_tmp["citation"]),
    //     "link": local_posthoc_tmp["link"],
    //     "placement": local_posthoc_tmp["placement"],
    //     "xai_type": local_posthoc_tmp["xai_type"],
    //     "nlp_task_1": local_posthoc_tmp["nlp_task_1"],
    //     "parts_covered": local_posthoc_tmp["parts_covered"],
    //     "type": local_posthoc_tmp["type"],
    //     "evaluation_metrics": local_posthoc_tmp["evaluation_metrics"],
    //     "operations": local_posthoc_tmp["operations"]
    //    }
    //    this.local_posthoc.push(paper)
    // }

    // for(let i = 0; i < local_self_tmp.length; i++)
    // {
    //   var record = local_self_tmp[i];
    //    var paper = {
    //     "title": record["title"],
    //     "authors": record["authors"],
    //     "year": record["year"],
    //     "venue": record["venue"],
    //     "main_explainability": record["main_explainability"],
    //     "main_visualization": record["main_visualization"],
    //     "citation": Number(local_self_tmp["citation"]),
    //     "link": local_self_tmp["link"],
    //     "placement": local_self_tmp["placement"],
    //     "xai_type": local_self_tmp["xai_type"],
    //     "nlp_task_1": local_self_tmp["nlp_task_1"],
    //     "parts_covered": local_self_tmp["parts_covered"],
    //     "type": local_self_tmp["type"],
    //     "evaluation_metrics": local_posthoc_tmp["evaluation_metrics"],
    //     "operations": local_posthoc_tmp["operations"]
    //    }
    //    this.local_posthoc.push(paper)
    // }


  }

  explainability_def = {
    "Feature Importance": 'Prediction explanations are derived from the \
                          importance scores of different features used in the NLP model to output the final prediction.',
    "Surrogate Model": "Explains model predictions by learning a second model, which is usually more \
                          explainable than the original model, as a proxy.",
    "Example-driven": 'A particular prediction of an input instance is explained by identifying and presenting \
                      other instances, usually from available labeled data, that are semantically similar to the input instance.',
    "Provenance": 'The explanation is an illustration of the entire prediction derivation process, which is an intuitive \
                  and effective explainability technique when the final prediction consists of a series of reasoning steps. ',
    "Induction": 'Explanations are generated by inducing human-readable representations, such as rules, trees and programs.'
  }
  visualization_def = {
    "SALIENCY": "Saliency has been primarily used to visualize the importance scores of different types of elements in XAI learning systems.",
    "NATURAL LANGUAGE": "The explanationis verbalized in human-comprehensible natural language",
    "RAW DECLARATIVE": "This visualization technique directly presents the learned declarative representations, such as logic rules, trees, and programs.",
    "RAW EXAMPLES": "This visualization technique is main for presenting example-driven explanations by showing the raw examples.",
    "OTHER": "Other miscellaneous visulziation techniques, such as statistic charts."
  }
  getPlainDefinition(technique_type, name)
  {
    if (technique_type==="explainability")
    {
      return this.explainability_def[name];
    }
    else
    {
      return this.visualization_def[name.toUpperCase()]
    }
  }


  viewDefinition(technique) {
    var tech = {
      'name': technique
    }
    this.dialog.open(DefinitionDialogComponent, {
      data: tech
    });
  }

  viewPaper(selectedPaper, xai_type) {
    selectedPaper["xai_type"] = xai_type
    console.log("xai_type "+ xai_type);
    this.dialog.open(PaperDialogComponent, {
      data: selectedPaper
    });
  }
  private _transformer = (level: number) => {
    // return {
    //   expandable: !!node.children && node.children.length > 0,
    //   name: node.name,
    //   level: level,
    //   image: node.image,
    //   text: node.text
    // };
  }

  // treeControl = new FlatTreeControl<FlatNode>(
  //   node => node.level, node => node.expandable);

  // treeFlattener = new MatTreeFlattener(
  //   this._transformer, node => node.level, node => node.expandable, node => node.children);

  // dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);



}
