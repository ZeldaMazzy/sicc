import { Component } from '@angular/core';
import { MissionControlService } from '../mission-control.service';
import { Mission } from 'src/app/shared/models/mission';
import { TEST_DATA_MISSIONDATA } from 'src/app/shared/stub/mission-control.stub';
import { Input } from '@angular/core';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.scss']
})
export class MissionListComponent {
  @Input() missions: Mission[] = TEST_DATA_MISSIONDATA;

  constructor (
    private missioncontrolservice: MissionControlService,
  ) { }
}
