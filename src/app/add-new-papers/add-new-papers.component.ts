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

  selected_exp = [];
  main_exp = "";
  selected_viz = [];
  main_viz = "";

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
  
  


  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder, private _snackBar: MatSnackBar) {}
  
  expControl = new FormControl();
  main_expControl = new FormControl();

  vizControl = new FormControl();
  main_vizControl = new FormControl();

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
