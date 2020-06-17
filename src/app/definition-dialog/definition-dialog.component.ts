import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface defData
{
  name: string
}

@Component({
  selector: 'definition-view-dialog',
  templateUrl: './definition-dialog.component.html',
})
export class DefinitionDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: defData) {}

  ngOnInit() {
  }

}