import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectedcaseComponent } from './suspectedcase.component';

describe('SuspectedcaseComponent', () => {
  let component: SuspectedcaseComponent;
  let fixture: ComponentFixture<SuspectedcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspectedcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspectedcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
