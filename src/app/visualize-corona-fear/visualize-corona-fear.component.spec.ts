import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeCoronaFearComponent } from './visualize-corona-fear.component';

describe('VisualizeCoronaFearComponent', () => {
  let component: VisualizeCoronaFearComponent;
  let fixture: ComponentFixture<VisualizeCoronaFearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizeCoronaFearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeCoronaFearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
