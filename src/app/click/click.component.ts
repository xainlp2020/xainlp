import { Component, OnInit } from '@angular/core';
import data from '../../assets/data/xaipapers.json';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.scss']
})
export class ClickComponent implements OnInit {

  constructor() { }
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
  


  dialog(name)
  {
    switch(name)
    {
      case "Type of explanation":
        return "Description about explanation type goes here"
      case "Local":
          return "Description about Local explanations goes here"

      case "Local Post-hoc":
          return "Description about Local Post-hoc explanations goes here"


      case "Local Self-explaining":
          return "Description about Local Local Self-explaining explanations goes here"
  
    
      case "Global":
          return "Description about Global explanations goes here"
      
      case "Global Post-hoc":
          return "Description about Global Post-hoc explanations goes here"
      
      case "Global Self-explaining":
          return " Description about Global Self-explaining explanations goes here"
      

     
      default:
        return "Not found"
  
    }
  
  }

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
      this.books = data[this.pnodes.node_data]
    }


  }


  popup(e)
  {
    this.resetPath()
   
    this.explanations = this.dialog(e.name)
    this.index = e.index
    if(e.node_data == undefined)
    {
      this.node_d = false
    }else
    {
      this.node_d = true
    }
   
    
    this.selectPath()
    
    
  }
  


  ngOnInit(): void {
    this.pnodes = this.nodes
 
    this.index = this.nodes.index
    this.explanations = this.dialog(this.nodes.name)
  }

}
