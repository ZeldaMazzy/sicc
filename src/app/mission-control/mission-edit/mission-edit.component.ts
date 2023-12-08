import { Component } from '@angular/core';
import { MissionControlService } from '../mission-control.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mission-edit',
  templateUrl: './mission-edit.component.html',
  styleUrls: ['./mission-edit.component.scss']
})
export class MissionEditComponent {
  constructor (
    private missioncontrolservice: MissionControlService,
    private activatedrouteservice: ActivatedRoute
  ) { }
}
