import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevyhalliComponent } from './levyhalli.component';

describe('LevyhalliComponent', () => {
  let component: LevyhalliComponent;
  let fixture: ComponentFixture<LevyhalliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevyhalliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevyhalliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
