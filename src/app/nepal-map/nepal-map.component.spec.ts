import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NepalMapComponent } from './nepal-map.component';

describe('NepalMapComponent', () => {
  let component: NepalMapComponent;
  let fixture: ComponentFixture<NepalMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NepalMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NepalMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
