import { Component, OnInit, Inject, Type } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import xaipapers from "../../assets/data/xaipapers.json";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PaperDialogComponent} from "../paper-dialog/paper-dialog.component";
import {DefinitionDialogComponent} from "../definition-dialog/definition-dialog.component";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {


  papers = xaipapers;

  viewDefinition(technique) {
    var tech = {
      'name': technique
    }
    this.dialog.open(DefinitionDialogComponent, {
      data: tech
    });
  }

  viewPaper(selectedPaper, xai_type) {
    selectedPaper["xai_type"] = xai_type
    console.log("xai_type "+ xai_type);
    this.dialog.open(PaperDialogComponent, {
      data: selectedPaper
    });
  }
  private _transformer = (level: number) => {
    // return {
    //   expandable: !!node.children && node.children.length > 0,
    //   name: node.name,
    //   level: level,
    //   image: node.image,
    //   text: node.text
    // };
  }

  // treeControl = new FlatTreeControl<FlatNode>(
  //   node => node.level, node => node.expandable);

  // treeFlattener = new MatTreeFlattener(
  //   this._transformer, node => node.level, node => node.expandable, node => node.children);

  // dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(public dialog: MatDialog) {
    // this.dataSource.data = TREE_DATA;
    console.log(xaipapers);
  }

}
