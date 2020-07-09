import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableTreeComponent } from './clickable-tree.component';

describe('ClickableTreeComponent', () => {
  let component: ClickableTreeComponent;
  let fixture: ComponentFixture<ClickableTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickableTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickableTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
