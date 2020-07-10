import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperDialogInDefinitionComponent } from './paper-dialog-in-definition.component';

describe('PaperDialogInDefinitionComponent', () => {
  let component: PaperDialogInDefinitionComponent;
  let fixture: ComponentFixture<PaperDialogInDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperDialogInDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperDialogInDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
