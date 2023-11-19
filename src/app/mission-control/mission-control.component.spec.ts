import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionControlComponent } from './mission-control.component';

describe('MissionControlComponent', () => {
  let component: MissionControlComponent;
  let fixture: ComponentFixture<MissionControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissionControlComponent]
    });
    fixture = TestBed.createComponent(MissionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
