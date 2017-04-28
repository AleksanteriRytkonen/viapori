import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RavintolatKahvilatComponent } from './ravintolat-kahvilat.component';

describe('RavintolatKahvilatComponent', () => {
  let component: RavintolatKahvilatComponent;
  let fixture: ComponentFixture<RavintolatKahvilatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RavintolatKahvilatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RavintolatKahvilatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
