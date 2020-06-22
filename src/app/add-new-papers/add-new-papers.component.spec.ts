import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPapersComponent } from './add-new-papers.component';

describe('AddNewPapersComponent', () => {
  let component: AddNewPapersComponent;
  let fixture: ComponentFixture<AddNewPapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewPapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
