import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisinformationComponent } from './misinformation.component';

describe('MisinformationComponent', () => {
  let component: MisinformationComponent;
  let fixture: ComponentFixture<MisinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
