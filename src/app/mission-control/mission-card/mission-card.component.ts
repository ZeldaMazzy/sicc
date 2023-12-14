import { Component, Input } from '@angular/core';
import { Mission } from 'src/app/shared/models/mission';
import { TEST_DATA_MISSIONDATA } from 'src/app/shared/stub/mission-control.stub';

@Component({
  selector: 'app-mission-card',
  templateUrl: './mission-card.component.html',
  styleUrls: ['./mission-card.component.scss']
})
export class MissionCardComponent {
  @Input() missions: Mission[] = TEST_DATA_MISSIONDATA;

  constructor() {}

  ngOninit():void {}

}
