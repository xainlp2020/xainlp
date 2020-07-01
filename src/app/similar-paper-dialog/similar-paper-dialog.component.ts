import {  Component, OnInit, Inject  } from '@angular/core';
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
  num_preview_img: number,
  similarity: number,
  similarity_explanation: string
}

interface similarPaperData {
  [index: number]: { paperData };
}



@Component({
  selector: 'app-similar-paper-dialog',
  templateUrl: './similar-paper-dialog.component.html',
  styleUrls: ['./similar-paper-dialog.component.css']
})
export class SimilarPaperDialogComponent implements OnInit {

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

  
  similarPapers;
  sim_page = 1;
  pageSize = 5;
  constructor(@Inject(MAT_DIALOG_DATA) public data: similarPaperData, public dialog: MatDialog) {
    console.log("in dialog")
    console.log(data)
    this.similarPapers = data
   }  

  ngOnInit(): void {
  }

}
