import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarPaperDialogComponent } from './similar-paper-dialog.component';

describe('SimilarPaperDialogComponent', () => {
  let component: SimilarPaperDialogComponent;
  let fixture: ComponentFixture<SimilarPaperDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarPaperDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarPaperDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
