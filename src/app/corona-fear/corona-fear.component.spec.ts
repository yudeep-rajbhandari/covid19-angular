import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaFearComponent } from './corona-fear.component';

describe('CoronaFearComponent', () => {
  let component: CoronaFearComponent;
  let fixture: ComponentFixture<CoronaFearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaFearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaFearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
