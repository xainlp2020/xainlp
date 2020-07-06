import { Component, OnInit } from '@angular/core';
import resources from "../../assets/resource/resource.json";


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resources;
  constructor() { }

  ngOnInit(): void {
    this.resources = resources;
  }

}
