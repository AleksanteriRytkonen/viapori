import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseotComponent } from './museot.component';

describe('MuseotComponent', () => {
  let component: MuseotComponent;
  let fixture: ComponentFixture<MuseotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
