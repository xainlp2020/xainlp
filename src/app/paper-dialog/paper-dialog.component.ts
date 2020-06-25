import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { fstat } from 'fs';


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
  operations: string,
  abstract: string,
  num_preview_img: number
}
@Component({
  selector: 'paper-view-dialog',
  templateUrl: 'paper-dialog.component.html'
})
export class PaperDialogComponent{
  images: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {

    var id = data["id"]
    var num_preview_img = data["num_preview_img"]
    console.log(data)
    this.images = [];

    var n = 10;
    for(var i = 1; i < num_preview_img+1; i++)
    {
      var img_file = "./../../assets/paper_preview_img/id";
      img_file = img_file.concat(id, "_", i.toString(), ".png")
      this.images.push(img_file)
    
    }
    console.log("Loaded Images " + this.images);
  }


  imageExists(url, callback) {
    var img = new Image();
    img.onload = function() { callback(true); };
    img.onerror = function() { callback(false); };
    img.src = url;
  }

  

  
}
