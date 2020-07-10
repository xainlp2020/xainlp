import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import xaipapers from "../../assets/data/xaipapers.json";
import {PaperDialogInDefinitionComponent} from "../paper-dialog-in-definition/paper-dialog-in-definition.component";
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
  operations: string,
  abstract: string,
  id: string,
  num_preview_img: number,
  similarity: number,
  similarity_explanation: string
}

interface refined_list {
  [index: number]: { paperData };
}


@Component({
  selector: 'app-definitions',
  templateUrl: './definitions.component.html',
  styleUrls: ['./definitions.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DefinitionsComponent implements OnInit {

  showPapers(dimension, value)
  {
    var refined_results = []
    if(dimension === 'explanation type')
    {
      for(var i = 0; i < this.all_papers.length; i++)
      {
        var paper = this.all_papers[i]
        if(paper["exp_type"].toLowerCase() == value.toLowerCase())
        {
          refined_results.push(paper)
        }
      }
    }
    else if(dimension === 'explainability')
    {
      for(var i = 0; i < this.all_papers.length; i++)
      {
        var paper = this.all_papers[i]
        if(paper["explainability"].toLowerCase().includes(value.toLowerCase()))
        {
          refined_results.push(paper)
        }
      }
    }
    else if(dimension === 'visualization')
    {
      for(var i = 0; i < this.all_papers.length; i++)
      {
        var paper = this.all_papers[i]
        if(paper["visualization"].toLowerCase().includes(value.toLowerCase()))
        {
          refined_results.push(paper)
        }
      }
    }
    else if(dimension === 'evaluation')
    {
      for(var i = 0; i < this.all_papers.length; i++)
      {
        var paper = this.all_papers[i]
        if(paper["evaluation_metrics"].toLowerCase().includes(value.toLowerCase()))
        {
          refined_results.push(paper)
        }
      }
    }
    this.dialog.open(PaperDialogInDefinitionComponent, {
      data: refined_results
    });
  }
  placement2type = {
    "1": "Local Post-hoc",
    "2": "Local Self-explaining",
    "3": "Global Post-hoc",
    "4": "Global Self-explaining"
  }
  all_papers = []
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

    for(var i = 0; i < this.all_papers.length; i++)
    {
      this.all_papers[i]['exp_type'] = this.placement2type[this.all_papers[i]["placement"]]
    }
  }


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.load_all_papers()
  }

}
