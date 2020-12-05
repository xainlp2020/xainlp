import { Component, OnInit } from '@angular/core';
import xaipapers from "../../assets/data/xaipapers.json";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  survey_citation_id = "@article{danilevsky2020survey,"
  survey_citation_title = "title={A Survey of the State of Explainable AI for Natural Language Processing},"
  survey_citation_authors = "author= {Danilevsky, Marina and Qian, Kun and Aharonov, Ranit and Katsis, Yannis and Kawas, Ban and Sen, Prithviraj},"
  survey_citation_journal = "journal={AACL-IJCNLP 2020},"
  survey_citation_year = "year={2020}"


  tutorial_citation_id = "@article{aacl2020xaitutorial,"
  tutorial_citation_title = "title={Explainability for Natural Language Processing},"
  tutorial_citation_authors = "author= {Dhanorkar, Shipi and Li, Yunyao and Popa, Lucian and Qian, Kun and Wolf, Christine T and Xu, Anbang},"
  tutorial_citation_journal = "journal={AACL-IJCNLP 2020},"
  tutorial_citation_year = "year={2020}"


  total_num_papers = 0
  total_search = 109

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
    // var tmp = JSON.stringify(this.all_papers).toLowerCase()
    // this.all_papers = JSON.parse(tmp)
    this.total_num_papers = this.all_papers.length
  }
  
  constructor() { }

  ngOnInit() {
    this.load_all_papers();
  }

}
