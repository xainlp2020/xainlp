import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-new-papers',
  templateUrl: './add-new-papers.component.html',
  styleUrls: ['./add-new-papers.component.css']
})
export class AddNewPapersComponent implements OnInit {

  /**
   * resource variables
   */
  resource_title = "";
  resource_authors = "";
  resource_url = "";
  resource_submitter_name  = "";
  resource_submitter_email = "";
  submitResourceForm()
  {
    this.clear_resource_form()
    this.openSnackBar("Request submitted", "OK")
  }
  clear_resource_form()
  {
    this.resource_title = "";
    this.resource_authors = "";
    this.resource_url = "";
    this.resource_submitter_name = "";
    this.resource_submitter_email = "";
  }

  /**
   * survey / tutorial variables
   */
  survey_title = "";
  survey_authors = "";
  survey_url = "";
  survey_year = "";
  survey_venue = "";
  survey_submitter_name  = "";
  survey_submitter_email = "";
  submitSurveyForm()
  {
    this.clear_survey_form()
    this.openSnackBar("Request submitted", "OK")
  }
  clear_survey_form()
  {
    this.survey_title = "";
    this.survey_authors = "";
    this.survey_url = "";
    this.survey_year = "";
    this.survey_venue = "";
    this.survey_submitter_name  = "";
    this.survey_submitter_email = "";
  }

  /**
   * paper variables
   */
  
  paper_title = "";
  paper_authors = "";
  paper_url = "";
  paper_year = "";
  paper_venue = "";
  paper_submitter_name  = "";
  paper_submitter_email = "";
  selected_eval_metrics = []
  selected_exp = [];
  main_exp = "";
  selected_viz = [];
  main_viz = "";
  submitPaperForm()
  {
    this.clear_paper_form()
    this.openSnackBar("Request submitted", "OK")
  }
  clear_paper_form()
  {
    this.paper_title = "";
    this.paper_authors = "";
    this.paper_url = "";
    this.paper_year = "";
    this.paper_venue = "";
    this.paper_submitter_name  = "";
    this.paper_submitter_email = "";
    this.selected_eval_metrics = []
    this.selected_exp = [];
    this.main_exp = "";
    this.selected_viz = [];
    this.main_viz = "";
  }

  resource_type = "paper"
  eval_metrics = ["Informal Evaluation", "Comparison to Ground Truth", "Human Evaluation"]
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }


  nlp_topics = [
    "Cognitive Modeling and Psycholinguistics",
    "Computational Social Science and Social Media",
    "Dialogue and Interactive Systems",
    "Discourse and Pragmatics",
    "Ethics and NLP",
    "Generation",
    "Information Extraction",
    "Information Retrieval and Text Mining",
    "Interpretability and Analysis of Models for NLP",
    "Language Grounding to Vision, Robotics and Beyond",
    "Theory and Formalism in NLP (Linguistic and Mathematical)",
    "Machine Learning for NLP",
    "Machine Translation",
    "NLP Applications",
    "Phonology, Morphology and Word Segmentation",
    "Question Answering",
    "Resources and Evaluation",
    "Semantics: Lexical",
    "Semantics: Sentence Level",
    "Semantics: Textual Inference and Other Areas of Semantics",
    "Sentiment Analysis, Stylistic Analysis, and Argument Mining",
    "Speech and Multimodality",
    "Summarization",
    "Syntax: Tagging, Chunking and Parsing",
    "Theme"
  ]

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  update_exp(selected) 
  {
    console.log(this.selected_exp);
    this.selected_exp = selected;
  }
  update_main_exp(selected) 
  {
    this.main_exp = selected;
  }

  update_viz(selected) 
  {
    this.selected_viz = selected;
  }
  update_main_viz(selected) 
  {
    this.main_viz = selected;
  }
  update_eval_metrics(selected)
  {
    this.selected_eval_metrics = selected
  }
  
  


  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder, private _snackBar: MatSnackBar) {}
  
  expControl = new FormControl();
  main_expControl = new FormControl();

  vizControl      = new FormControl();
  main_vizControl = new FormControl();
  metric_Control  = new FormControl();

  exp_techniques: string[] = ['Feature Importance', "Rule Induction", "Surrogate Models", "Program Induction", "Tree Induction",
                              "Provenance", "others"];

  viz_techniques: string[] = ['Saliency', "Natural Language", "Raw Rules", "Raw Trees", "Raw Programs", "Raw Examples",
                              "others"];

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
