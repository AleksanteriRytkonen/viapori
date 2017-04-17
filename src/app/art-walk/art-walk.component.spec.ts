import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtWalkComponent } from './art-walk.component';

describe('ArtWalkComponent', () => {
  let component: ArtWalkComponent;
  let fixture: ComponentFixture<ArtWalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtWalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtWalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
