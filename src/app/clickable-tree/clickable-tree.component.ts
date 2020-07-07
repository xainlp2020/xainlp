import { Component, OnInit } from '@angular/core';
import xaipapers from "../../assets/data/xaipapers.json";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PaperDialogComponent} from "../paper-dialog/paper-dialog.component";


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
  selector: 'app-clickable-tree',
  templateUrl: './clickable-tree.component.html',
  styleUrls: ['./clickable-tree.component.css']
})
export class ClickableTreeComponent implements OnInit {

  typeMap = {
    "1": "Local Post-hoc",
    "2": "Local Self-explaining",
    "3": "Global Post-hoc",
    "4": "Global Self-explaining"
  }
  viewPaper(event)
  {
    var data = event.data
    if (data.info != undefined)
    {
      console.log('clicking a leaf node')
      var selectedPaper = data.info
      selectedPaper["xai_type"] = this.typeMap[selectedPaper["placement"]]
      this.dialog.open(PaperDialogComponent, {
        data: selectedPaper
      });
    }
    // console.log(event)
  }

  tree_option;
  papers;
  render_tree()
  {
    this.papers = {
      name: "Type of explanation",
      children: [
        {
          name: "Local Post-hoc",
          children: []
        },
        {
          name: "Local Self-explaining",
          children: []
        },
        {
          name: "Global Post-hoc",
          children: []
        },
        {
          name: "Global Self-explaining",
          children: []
        }
      ]
    }

    console.log(this.papers)
    for(var i = 0; i < xaipapers["local-post-hoc"].length; i++)
    {
      var p = xaipapers["local-post-hoc"][i]
      this.papers.children[0].children.push({
        name: p.title,
        info: p
      })
    }
    for(var i = 0; i < xaipapers["local-self"].length; i++)
    {
      var p = xaipapers["local-self"][i]
      this.papers.children[1].children.push({
        name: p.title,
        info: p
      })
    }
    for(var i = 0; i < xaipapers["global-post-hoc"].length; i++)
    {
      var p = xaipapers["global-post-hoc"][i]
      this.papers.children[2].children.push({
        name: p.title,
        info: p
      })
    }
    for(var i = 0; i < xaipapers["global-self"].length; i++)
    {
      var p = xaipapers["global-self"][i]
      this.papers.children[3].children.push({
        name: p.title,
        info: p
      })
    }

    this.tree_option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',
                layout: "horizontal",
                data: [this.papers],
                roam: true,
                top: '1%',
                left: '10%',
                bottom: '1%',
                right: '50%',
                height: 700,
                symbolSize: 10,
                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 12
                },

                leaves: {
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },
                tooltip: {
                  position: "bottom"
                },
                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    }
  }


  constructor(public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.render_tree()
  }

}
