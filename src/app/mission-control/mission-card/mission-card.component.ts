import { Component, Input } from '@angular/core';
import { Mission } from 'src/app/shared/models/mission';
import { TEST_DATA_MISSIONDATA } from 'src/app/shared/stub/mission-control.stub';


@Component({
  selector: 'app-mission-card',
  templateUrl: './mission-card.component.html',
  styleUrls: ['./mission-card.component.scss']
})
export class MissionCardComponent {
  @Input() mission!: Mission;


  imgNum:number = Math.ceil(Math.random()*10);


}
