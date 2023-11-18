import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionColumnsComponent } from './mission-columns.component';

describe('MissionColumnsComponent', () => {
  let component: MissionColumnsComponent;
  let fixture: ComponentFixture<MissionColumnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissionColumnsComponent]
    });
    fixture = TestBed.createComponent(MissionColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
