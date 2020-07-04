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
    name: 'Static or Interactive',
    split: ['Static', 'Interactive'],
    cssClass: 'selection-current',
    index:[0],
   
    
    
    subordinates: [
      {
        name: 'Data or Model',
        split: ['Data','Model'],
        cssClass: 'selection-not',
        index:[0,0],
        subordinates: [
          {
            name: 'Distributions, Samples or features',
            split:['Algorithms. ProtoDash, DIP-VAE'],
            cssClass: 'selection-not',
            index:[0,0,0],
            subordinates: [
  
              {
                name: 'Algorithms. ProtoDash, DIP-VAE',
                cssClass: 'selection-not',
                userType: 'Domain Expert',
                node_data:["1.1.1.1"],
                index:[0,0,0,0],
                subordinates: []
              }
            ]
          }
          ,
          {
            name: 'Local or Global',
            cssClass: 'selection-not',
            split:['Local', 'Global'],
            index:[0,0,1],
            // designation: 'Explanation',
            subordinates: [ {
              name: 'Posthoc or Self Explaining',
              cssClass: 'selection-not',
              split: ['Posthoc', 'Self explaining'],
              index:[0,0,1,0],
              // designation: 'Explanation',
              subordinates: [
                {
                  name: 'Samples or Features or Surrogate model',
                  cssClass: 'selection-not',
                  split:['Samples', 'Features', 'Surrogate model'],
                  // designation: 'Explanation',
                  index:[0,0,1,0,0],
                  subordinates: [
                    {
                      name: 'Samples ',
                      cssClass: 'selection-not',
                      userType: 'End User',
                      node_data: ["1.1.2.1.1.1"],
                      index:[0,0,1,0,0,0],
                      subordinates:[]
                    },
                    {
                      name: 'Feature based explanation,(CEM/CEM-MAF)',
                      cssClass: 'selection-not',
                      userType: 'Algorithm details',
                      node_data: ["1.1.2.1.1.1"],
                      index:[0,0,1,0,0,1],
                      subordinates: []
                    },
                    {
                      name: 'Surrogate model',
                      cssClass: 'selection-not',
                      userType: 'Algorithm details',
                      node_data: ["1.1.2.1.1.2.1"],
                      index:[0,0,1,0,0,2],
                      subordinates: []
                    },

                  ]
                },
                {
                  name: 'Feature level or directly interpretable',
                  cssClass: 'selection-not',
                  split:['Feature level', 'Directly interpretable'],
                  index:[0,0,1,0,1],
                  // designation: 'Explanation',
                  subordinates: [
                    {
                      name: 'Feature level interpretable',
                      cssClass: 'selection-not',
                      split:['Word level', 'Extracted features'],
                      // designation: 'Explanation',
                      index:[0,0,1,0,1,0],
                      subordinates: [
                        {
                          name: 'Word level',
                          cssClass: 'selection-not',
                          userType: 'End User',
                          node_data:['1.1.2.1.2.1.1.1'],
                          // imageUrl: './assets/me.png',
                          index:[0,0,1,0,1,0,0],
                          subordinates: []
                        },
                        {
                          name: 'Extracted Features',
                          cssClass: 'selection-not',
                          userType: 'AI Expert',
                          node_data :["1.1.2.1.2.1.2.2",],
                          index:[0,0,1,0,1,0,1],
                          // imageUrl: './assets/me.png',
                          subordinates: []
                        } 
                      ]
                    },
                    {
                      name: 'Directly interpretable',
                      cssClass: 'selection-not',
                      userType: 'End User',
                      node_data: ['1.1.2.1.2.1.2'],
                      index:[0,0,1,0,1,1],
                      subordinates: []
                    }
                  ]
                }
              ]
            }, {
              name: 'Direct or Posthoc',
              cssClass: 'selection-not',
              split:['Direct' , 'Posthoc'],
              index:[0,0,1,1],
              // designation: 'Explanation',
              subordinates: [ {
                name: 'Algorithms. BRCG or GLRM',
                cssClass: 'selection-not',
                userType: 'Domain Expert',

                node_data: ["1.1.2.2.1.1"],
                index:[0,0,1,1,0],
                subordinates: []
              }, {
                name: 'Surrogate or Visualize',
                cssClass: 'selection-not',
                split: ['Surrogate', 'Visualize'],
                index:[0,0,1,1,1],
                // designation: 'AI Expert',
                subordinates: [{
                  name: 'Learn interpretable model, ProfWeight',
                  cssClass: 'selection-not',
                 //designation: 'Algorithm details. ',
                 index:[0,0,1,1,1,0],
                 node_data: ["1.1.2.1.1.2.2"],
                  subordinates: []
                },{
                  name: 'Visualize',
                  cssClass: 'selection-not',
                  node_data: ["1.1.2.1.1.2.2"],
                  index:[0,0,1,1,1,1],
                  // designation: 'Explanation',
                  subordinates: []
                }]
              }]
            }]
          }
  
        ]
      },
      {
        name: 'Interactive?',
        cssClass: 'selection-not',
        split:[],
        index:[0,1],
        // designation: 'Explanation',
        subordinates: []
      }
    ]
  };
  


  dialog(name)
  {
    switch(name)
    {
      case "Static or Interactive":
        return "Static explanation does not change in response to feedback from a consumer,\
                while an interactive explanation allows consumers to interact with explanations\
                (e.g., through dialog)."
      case "Data or Model":
          return "Refers to what type (data or model) of explanation is desired. \
                  One shot static or interactive explanations with aim to understand\
                  data or model. Model provides explanations for individual samples \
                  (local) or overall bevaior (global) "
      case "Interactive?":
          return "No method is currently available in this particular category"
  
    
      case "Distributions, Samples or features":
          return "Explanations based on samples are in terms of prototypes and criticisms.\
                  (a form of case-based reasoning)."
      
      case "Algorithms. ProtoDash, DIP-VAE":
          return "Tools that are available are ProtoDash and DIP-AVE. \ DIPVAEExplainer can be used to visualize the changes in the latent space of\ Disentangled Inferred Prior-VAE or DIPVAE [#1]_.\ This model is a Variational Autoencoder [#2]_\ variant that leads to a disentangled latent space.\ This is achieved by matching the covariance of the prior distributions with the inferred prior."
      
      case "Local or Global":
          return " Determine the scope of the explanation (either Global or Local).\
                   Global shows the entire predictive model to the user to help them understand it\
                   (such as a small decision tree, whether obtained directly or in a post hoc manner).\
                   Local explanation provide the explanations associated with individual predictions\
                   (e.g., what was it about the features of this partcular person that resulted in their\
                   loan being denied)."
      
      case "Direct or Posthoc":
          return "Directly interpretable model, by its intrinsic transparent nature,\
                  is understandable by most consumers (e.g., a small decision tree),\
                  whereas a post-hoc explanation involves an auxiliary or surrogate method to explain\
                  a model after it has been trained."
      
     case "Posthoc or Self Explaining":
            return "The model can be explained locally with a posthoc preprocess (i.e., learn a surrogate model)\ or the model in question is already self-explaining to some extend. Note that\ self-explaining model by itself generates local explanations that may not necessarily be\ directly interpretable (e.g., rationale generation in text)."
      
  
          case "Direct or Posthoc":
          return "These publications illustrate data, explanation as Samples, distributions and features.\
                  ProtoDash(Case-based reasoning using tables, images and text) and Disentangled Inferred Prior Variational Autoencoder (DIP-VAE) - Learns high-level independent features from images that possibly have semantic interpretation. "
      
      case "Samples or Features or Surrogate model":
          return "Use sample examples (either from labeled data or unlabeled data) to provide explanation.\ it could be find similar examples to present to the user or use the similar examples to train\ a locally faithful surrogate model to explain the target model. "
      
  
      case "Feature based explanation,(CEM/CEM-MAF)":
          return "Contrastive Explanations Method (CEM) - Generates a local explanation in terms of what is minimally sufficient to maintain the original classification, and also what should be necessarily absent. Contrastive Explanations Method with Monotonic Attribute Functions (CEM-MAF) - For complex images, creates contrastive explanations like CEM above but based on high-level semantically meaningful attributes"
      
      case "Feature level or directly interpretable":
          return "Following the self-interpretable models for local explanations, we may have feature-level\ (either at the word-level or extracted-feature level) self-explaining or directly interpretable self-explaining\ models."
      
      case "Word level":
          return "Word level features coming directly from text (e.g., highlighting some of the input words that\
                  contributed to the final prediction significantly."
      
      case "Extracted Features":
          return "Providing explanations using extracted features, such as sparse word embeddings."
      
      case "Directly interpretable":
          return "Directly interpretable model with local examples. AI techniques such as decision rule sets, decision trees, and decision tables"
      
      case "Surrogate or Visualize":
          return "surrogate model is usually a directly interpretable model that approximates a more complex model, while a visualization of a model may focus on parts of it and is not itself a full-fledged model."
      
      case "Algorithms. BRCG or GLRM":
          return "Boolean Rule Column Generation explainer. Provides access to an algorithm, which implements a directly interpretable supervised learning method for binary classification that learns a Boolean rule in disjunctive normal form (DNF) or conjunctive normal form (CNF) using column generation (CG).."
      
      case "Visualize":
          return "No method is currently available in this particular category"
      
      case "Learn interpretable model, ProfWeight":
          return "ProfWeight Learns a reweighting of the training set based on a given interpretable model and a high-performing complex neural network. Retraining of the interpretable model on this reweighted training set is likely to improve the performance of the interpretable model."
      
      case "Feature level interpretable":
          return "Word level coming directly from text or extracted features"
  
  
     
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
