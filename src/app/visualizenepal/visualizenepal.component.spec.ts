import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizenepalComponent } from './visualizenepal.component';

describe('VisualizenepalComponent', () => {
  let component: VisualizenepalComponent;
  let fixture: ComponentFixture<VisualizenepalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizenepalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizenepalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
