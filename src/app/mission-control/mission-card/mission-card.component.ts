import { Component, Input } from '@angular/core';
import { Mission } from 'src/app/shared/models/mission';
@Component({
  selector: 'app-mission-card',
  templateUrl: './mission-card.component.html',
  styleUrls: ['./mission-card.component.scss']
})
export class MissionCardComponent {
  @Input() mission!: Mission;
  imgNum:number = Math.ceil(Math.random()*10);
}
