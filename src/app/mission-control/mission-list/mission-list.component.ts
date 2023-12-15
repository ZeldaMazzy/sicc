import { Component, Input } from '@angular/core';
import { MissionControlService } from '../mission-control.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.scss']
})
export class MissionListComponent {

  constructor (
    private missioncontrolservice: MissionControlService,
  ) { }
}
