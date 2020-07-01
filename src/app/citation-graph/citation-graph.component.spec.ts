import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationGraphComponent } from './citation-graph.component';

describe('CitationGraphComponent', () => {
  let component: CitationGraphComponent;
  let fixture: ComponentFixture<CitationGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitationGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitationGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
