import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData
{
  title: string,
  authors: string,
  year: string,
  venue: string,
  main_explainability: string,
  main_visualization: string,
  citation: string,
  link: string,
  placement: string,
  xai_type: string,
  nlp_task_1: string,
  parts_covered: string,
  type: string,
  evaluation_metrics: string,
  operations: string
}
@Component({
  selector: 'paper-view-dialog',
  templateUrl: 'paper-dialog.component.html'
})
export class PaperDialogComponent{
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
