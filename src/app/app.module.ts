import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DefinitionsComponent } from './definitions/definitions.component';
import { TreeComponent } from './tree/tree.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { PaperDialogComponent } from './paper-dialog/paper-dialog.component';
import { DefinitionDialogComponent } from './definition-dialog/definition-dialog.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { AddNewPapersComponent } from './add-new-papers/add-new-papers.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material';

import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { VisualizationComponent } from './visualization/visualization.component';
import {MatSliderModule} from '@angular/material/slider';
import { SearchComponent } from './search/search.component';
import { SimilarPaperDialogComponent } from './similar-paper-dialog/similar-paper-dialog.component';
import { CitationGraphComponent } from './citation-graph/citation-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DefinitionsComponent,
    TreeComponent,
    PaperDialogComponent,
    DefinitionDialogComponent,
    AddNewPapersComponent,
    VisualizationComponent,
    SearchComponent,
    SimilarPaperDialogComponent,
    CitationGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDividerModule,
    MatRadioModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatSnackBarModule,
    MatSliderModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    MatCheckboxModule
  ],
  entryComponents:
  [
    PaperDialogComponent,
    DefinitionDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
