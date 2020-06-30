import { Component, OnInit } from '@angular/core';
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
  operations: string,
  abstract: string,
  id: string,
  num_preview_img: number
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  /**
   * Open paper dialog
   * @param event 
   */
  placement2type = {
    "1": "local post-hoc",
    "2": "local self-explaining",
    "3": "global post-hoc",
    "4": "global self-explaining"
  }
  viewPaper(selectedPaper) {
    // selectedPaper["xai_type"] = xai_type
    var placement = selectedPaper["placement"]
    selectedPaper["xai_type"] = this.placement2type[placement]
    console.log("selected paper ");
    console.log(selectedPaper)
    this.dialog.open(PaperDialogComponent, {
      data: selectedPaper
    });
  }
    

  /**
   * 
   * find similar papers
   */
  /**
   * "id": "2",
      "authors": "Abdalghani Abujabal, Rishiraj Saha Roy, Mohamed Yahya, Gerhard Weikum",
      "title": "QUINT: Interpretable Question Answering over Knowledge Bases.",
      "link": "https://www.aclweb.org/anthology/D17-2011.pdf",
      "year": "2017",
      "venue": "EMNLP",
      "type": "demo",
      "citation": "15",
      "nlp_task_1": "Question Answering",
      "explainability": "Template-based, Provenance, Example-driven",
      "visualization": "Natural Language, other visualization techniques, Raw Examples",
      "main_explainability": "provenance",
      "main_visualization": "natural Language",
      "placement": "2",
      "operations": "template-based, generates query",
      "evaluation_metrics": "none",
      "parts_covered": "template-based, generates query",
      "abstract": "We present QUINT, a live system for question answering over knowledge bases. QUINT automatically learns role-aligned utterance-query templates from user questions paired with their answers. When QUINT answers a question, it visualizes the complete derivation sequence from the natural language utterance to the final answer. The derivation provides an explanation of how the syntactic structure of the question was used to derive the structure of a SPARQL query, and how the phrases in the question were used to instantiate different parts of the query. When an answer seems unsatisfactory, the derivation provides valuable insights towards reformulating the question.",
      "num_preview_img": 2
   */
  seedpaper;
  similarPapers = []
  main_attr_for_sim = ["nlp_task_1", "operations", "main_explainability", "main_visualization"]
  main_attr_for_sim_NL = ["NLP Task", "Explainability Operations", "Main Explainability Technique", "Main Visualization Technique"]
  main_attr_for_sim_importance_score = [1.0, 1.0, 1.0, 1.0]
  main_attr_for_sim_comparison_method = ["exact match", "exact match", "exact match", "exact match"]
  similarity_threshold = 1;
  findSimilar(paper)
  {
    this.similarPapers = []
    console.log("find similar papers for ")
    this.seedpaper = paper
    for(var i = 0; i < this.all_papers.length; i++)
    {
      var candidate = this.all_papers[i]
      var score = 0.0;

      
      if(candidate["title"].trim().toLowerCase() == paper["title"].trim().toLowerCase())
      {
        continue
      }

      var similar_attrs = []
      var dissimilar_attrs = []

      for(var attr_index = 0; attr_index < this.main_attr_for_sim.length; attr_index++)
      {
        var attr = this.main_attr_for_sim[attr_index]
        var attr_score = this.main_attr_for_sim_importance_score[attr_index]
        var candid_attr = candidate[attr].trim().toLowerCase()
        var attr_comp_method = this.main_attr_for_sim_comparison_method[attr_index]

        var seed_attr = this.seedpaper[attr].trim().toLowerCase()        
        if(attr_comp_method == 'exact match')
        {
          console.log(seed_attr + " vs. " + candid_attr)
          if(seed_attr==candid_attr)
          {
            score += attr_score;
            similar_attrs.push(this.main_attr_for_sim_NL[attr_index])
          }
          else
          {
            dissimilar_attrs.push(this.main_attr_for_sim_NL[attr_index])
          }
        }
        else
        {
          console.log("need to be implemented in the future: " + attr_comp_method);
        }
      }
      if(score / this.main_attr_for_sim.length > this.similarity_threshold / this.main_attr_for_sim.length)
      {
        var tmp = JSON.parse(JSON.stringify(candidate))
        tmp["similarity"] = score / this.main_attr_for_sim.length
        tmp["similarity_explanation"] = this.generateExplanation(similar_attrs, dissimilar_attrs);
        this.similarPapers.push(tmp)
      }
      this.similarPapers.sort((a, b) => (a.similarity > b.similarity) ? -1 : 1)
    }
    console.log("similar papers:")
    console.log(this.similarPapers);
  }

  sim_page = 1;
  explanation_highlight = "w3-text-purple"
  generateExplanation(similar_attrs, dissimilar_attrs)
  {
    var explanation = ""
    var positive = ""
    var negative = ""
    if(similar_attrs.length > 0)
    {
      var tmp = ""
      if (similar_attrs.length == 1)
      {
        tmp = similar_attrs[0]
      }
      else
      {
        for(var i = 0; i < similar_attrs.length; i++)
        {
          if(i == similar_attrs.length-1)
          {
            tmp = tmp.concat(" and " + similar_attrs[i])
          }
          else{
            tmp += similar_attrs[i] + ", "
          }
        }
      }
      var positive = "This paper has similar <span class='" + this.explanation_highlight + "'>" + tmp + "</span>"
    }

    if(dissimilar_attrs.length > 0)
    {
      var tmp = ""
      if (dissimilar_attrs.length == 1)
      {
        tmp = dissimilar_attrs[0]
      }
      else
      {
        for(var i = 0; i < dissimilar_attrs.length; i++)
        {
          if(i == dissimilar_attrs.length-1)
          {
            tmp += " and " + dissimilar_attrs[i]
          }
          else{
            tmp += dissimilar_attrs[i] + ", "
          }
        }
      }
      var negative = ", but it has different <span class='" + this.explanation_highlight + "'>" + tmp + "</span>"
    }
    return positive + negative + ".";
  }

  keyDownFunction(event)
  {
    if (event.keyCode === 13)
    {
      this.search(this.query)
    }
  }

  page = 1;
  pageSize = 5;
  ngOnInit(): void {
    console.log("core attrs: ");
    console.log(this.core_attr)
    
    this.load_all_papers();
    console.log(this.all_papers)
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
  }
  
  /**
   * Function for getting all occurrence of search term
   */
  helper(searchStr, str, indices)
  {
    var startIdex = 0;
    // console.log(startIdex + " " +  str.length)

    var highlighted = "";
    for(var i = 0; i < indices.length; i++)
    {
      // console.log(startIdex + "\t" + i)
      var curr_index = indices[i]
      var temp = str.substring(startIdex, curr_index)
      highlighted = highlighted.concat(temp)
      var highlight_part = "<b class='w3-text-red'>" + str.substring(curr_index, curr_index + searchStr.length) + "</b>"
      highlighted = highlighted.concat(highlight_part)
      
      startIdex = curr_index + searchStr.length
    }
    if(startIdex < str.length)
    {
      highlighted = highlighted.concat(str.substring(startIdex))
    }
    return highlighted
  }
  search_caseSensitive = false;
  getHighlights(searchStr, str) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0 || str == undefined) {
      return str;
    }
    var massaged_str = str.slice(0);
    if(!this.search_caseSensitive)
    {
      massaged_str = massaged_str.toLowerCase()
    }

    
    var startIndex = 0, index, indices = [];
    if (true) {
        searchStr = searchStr.toLowerCase();
    }
    while ((index = massaged_str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    // console.log("indices")
    // console.log(indices)
    return this.helper(searchStr, str, indices);
    // return indices;
}
  
  active_tab = "All"

  query = "";
  attr_order = ["any", "title", "abstract", "nlp_task_1",
  "authors", "explainability", "visualization", 
  "operations", "evaluation_metrics"]

  attr_natural_language = ["All", "title", "abstract", "nlp topic",
  "authors", "explainability", "visualization", 
  "operations", "evaluation metrics"]

  core_attr = new Set(["title", "abstract", "nlp_task_1",
  "authors", "explainability", "visualization", 
  "operations", "evaluation_metrics"]);
  
  query_results = {}
  final_results = []
  
  search(query)
  {
    this.final_results = []
    this.query_results = {"any":[]}
    var q = query.trim().toLowerCase();

    for(var i = 0; i < this.all_papers.length; i++)
    {
      // console.log("searching paper id " + i)
      var paper = this.all_papers[i]
      var already_included_in_any_result = false;
      // console.log(paper)
      for(let attr of this.core_attr)
      {
        if(attr in paper)
        {
          var attr_val = paper[attr]
          // console.log("searching within " + attr)
          if(attr_val.includes(q))
          {
            // found query term in attr
            if(attr in this.query_results)
            {
              this.query_results[attr].push(paper)
            }
            else{
              // first time this attr is used
              this.query_results[attr] = [paper]
            }
            if(!already_included_in_any_result)
            {
              this.query_results["any"].push(paper)
              already_included_in_any_result = true;
            }
          }
        }
      }
    }
    
    // console.log("query results")
    // console.log(this.query_results)
    for(var i = 0; i < this.attr_order.length; i++)
    {
      var attr = this.attr_order[i]
       // first, for any attribute
       if(this.query_results[attr] != undefined)
       {
         this.final_results.push(this.query_results[attr])
       }
       else
       {
         this.final_results.push(undefined)
       }
    }

    console.log("final results")
    console.log(this.final_results)
  }
  
  constructor(public dialog: MatDialog) {

   }

  
}
