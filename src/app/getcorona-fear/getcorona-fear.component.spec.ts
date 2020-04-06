import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcoronaFearComponent } from './getcorona-fear.component';

describe('GetcoronaFearComponent', () => {
  let component: GetcoronaFearComponent;
  let fixture: ComponentFixture<GetcoronaFearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcoronaFearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcoronaFearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
