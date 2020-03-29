import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSuspectedcasesComponent } from './view-suspectedcases.component';

describe('ViewSuspectedcasesComponent', () => {
  let component: ViewSuspectedcasesComponent;
  let fixture: ComponentFixture<ViewSuspectedcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSuspectedcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSuspectedcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
