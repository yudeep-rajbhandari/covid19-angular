import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BlackmarketingComponent } from './blackmarketing.component';

describe('BlackmarketingComponent', () => {
  let component: BlackmarketingComponent;
  let fixture: ComponentFixture<BlackmarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackmarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
