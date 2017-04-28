import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapsilleComponent } from './lapsille.component';

describe('LapsilleComponent', () => {
  let component: LapsilleComponent;
  let fixture: ComponentFixture<LapsilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapsilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapsilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
