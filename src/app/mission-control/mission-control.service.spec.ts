import { TestBed } from '@angular/core/testing';

import { MissionControlService } from './mission-control.service';

describe('MissionControlService', () => {
  let service: MissionControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissionControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
