import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AQIvisualizeComponent } from './aqivisualize.component';

describe('AQIvisualizeComponent', () => {
  let component: AQIvisualizeComponent;
  let fixture: ComponentFixture<AQIvisualizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AQIvisualizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AQIvisualizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
