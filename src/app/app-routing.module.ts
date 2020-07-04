import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DefinitionsComponent } from './definitions/definitions.component';
import { TreeComponent } from './tree/tree.component';
import { AddNewPapersComponent} from './add-new-papers/add-new-papers.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { SearchComponent } from "./search/search.component";
import { CitationGraphComponent} from "./citation-graph/citation-graph.component";
import { ClickComponent } from './click/click.component';

const routes: Routes = [
  { path: 'definitions', component: DefinitionsComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'viz', component: VisualizationComponent },
  { path: 'search', component: SearchComponent },
  { path: 'newpapers', component: AddNewPapersComponent },
  { path: 'network', component: CitationGraphComponent },
  { path: 'click', component: ClickComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
