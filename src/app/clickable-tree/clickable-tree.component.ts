import { Component, OnInit } from '@angular/core';
import xaipapers from "../../assets/data/xaipapers.json";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PaperDialogComponent} from "../paper-dialog/paper-dialog.component";
import { NONE_TYPE } from '@angular/compiler';


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


  chart_type = "without_nlp"

   
  /**
   * type->local/global-> posthoc/self -> nlp -> papers
   */
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
  tree_option_withoutNLP;
  papers;
  papers_nlp;
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
    this.papers_nlp = {
      name: "Type of explanation",
      children: [
        {
          name: "Local Post-hoc",
          children: [
          ]
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
      var nlp_task = p['nlp_task_1'].trim().toLowerCase()
      
      this.papers.children[0].children.push({
        name: p.title,
        info: p
      })

      var found = false;
      console.log("papers")
      console.log(this.papers_nlp.children[0].children)
      for(var childIdx = 0; childIdx < this.papers_nlp.children[0].children.length; childIdx++)
      {
        console.log(child )
        var child = this.papers_nlp.children[0].children[childIdx]
        console.log(child )
        if(child.name.trim().toLowerCase() === '')
        {

        }
        if(child.name.toLowerCase() === nlp_task)
        {
          found = true
          child.children.push({
            name: p.title,
            info: p
          })
          break;
        }
      }
      if(!found)
      {
        var newChild = {
          name: p["nlp_task_1"],
          children: [
            {
              name: p.title,
              info: p
            }
          ]
        }
        this.papers_nlp.children[0].children.push(newChild)
      }
    }
    for(var i = 0; i < xaipapers["local-self"].length; i++)
    {
      var p = xaipapers["local-self"][i]
      var nlp_task = p['nlp_task_1'].trim().toLowerCase()


      this.papers.children[1].children.push({
        name: p.title,
        info: p
      })

      var found = false;
      console.log("papers")
      for(var childIdx = 0; childIdx < this.papers_nlp.children[1].children.length; childIdx++)
      {
        console.log(child )
        var child = this.papers_nlp.children[1].children[childIdx]
        console.log(child )
        if(child.name.trim().toLowerCase() === '')
        {

        }
        if(child.name.toLowerCase() === nlp_task)
        {
          found = true
          child.children.push({
            name: p.title,
            info: p
          })
          break;
        }
      }
      if(!found)
      {
        var newChild = {
          name: p["nlp_task_1"],
          children: [
            {
              name: p.title,
              info: p
            }
          ]
        }
        this.papers_nlp.children[1].children.push(newChild)
      }
    }
    for(var i = 0; i < xaipapers["global-post-hoc"].length; i++)
    {
      var p = xaipapers["global-post-hoc"][i]
      var nlp_task = p['nlp_task_1'].trim().toLowerCase()

      this.papers.children[2].children.push({
        name: p.title,
        info: p
      })

      var found = false;
      console.log("papers")
      for(var childIdx = 0; childIdx < this.papers_nlp.children[2].children.length; childIdx++)
      {
        console.log(child )
        var child = this.papers_nlp.children[2].children[childIdx]
        console.log(child )
        if(child.name.trim().toLowerCase() === '')
        {

        }
        if(child.name.toLowerCase() === nlp_task)
        {
          found = true
          child.children.push({
            name: p.title,
            info: p
          })
          break;
        }
      }
      if(!found)
      {
        var newChild = {
          name: p["nlp_task_1"],
          children: [
            {
              name: p.title,
              info: p
            }
          ]
        }
        this.papers_nlp.children[2].children.push(newChild)
      }
    }
    for(var i = 0; i < xaipapers["global-self"].length; i++)
    {
      var p = xaipapers["global-self"][i]
      var nlp_task = p['nlp_task_1'].trim().toLowerCase()


      this.papers.children[3].children.push({
        name: p.title,
        info: p
      })

      var found = false;
      console.log("papers")
      for(var childIdx = 0; childIdx < this.papers_nlp.children[3].children.length; childIdx++)
      {
        console.log(child )
        var child = this.papers_nlp.children[3].children[childIdx]
        console.log(child )
        if(child.name.trim().toLowerCase() === '')
        {

        }
        if(child.name.toLowerCase() === nlp_task)
        {
          found = true
          child.children.push({
            name: p.title,
            info: p
          })
          break;
        }
      }
      if(!found)
      {
        var newChild = {
          name: p["nlp_task_1"],
          children: [
            {
              name: p.title,
              info: p
            }
          ]
        }
        this.papers_nlp.children[3].children.push(newChild)
      }
    }

    this.tree_option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        backgroundColor: "#eeeeee",
        series: [
            {
                type: 'tree',
                layout: "horizontal",
                data: [this.papers_nlp],
                initialTreeDepth: 3,
                roam: true,
                top: '1%',
                left: '7%',
                bottom: '1%',
                right: '25%',
                height: 750,
                width: 1000,
                symbolSize: 10,
                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 12
                },
                lineStyle:{
                  color: "#cfd1d3",
                  width: 1,
                },
                leaves: {
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },
                tooltip: {
                  show: false,
                  position: "bottom"
                },
                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    }

    this.tree_option_withoutNLP = {
      tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
      },
      backgroundColor: "#eeeeee",
      series: [
          {
              type: 'tree',
              layout: "horizontal",
              data: [this.papers],
              initialTreeDepth: 3,
              roam: true,
              top: '1%',
              left: '10%',
              bottom: '1%',
              right: '45%',
              height: 750,
              width: 800,
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
                show: false,
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
