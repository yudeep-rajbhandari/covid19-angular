import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMisinformationComponent } from './view-misinformation.component';

describe('ViewMisinformationComponent', () => {
  let component: ViewMisinformationComponent;
  let fixture: ComponentFixture<ViewMisinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMisinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMisinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
