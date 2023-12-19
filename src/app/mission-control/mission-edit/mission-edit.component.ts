import { Component } from '@angular/core';
import { MissionControlService } from '../mission-control.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mission-edit',
  templateUrl: './mission-edit.component.html',
  styleUrls: ['./mission-edit.component.scss']
})
export class MissionEditComponent {
  isEditMode = false

  constructor (
    private missioncontrolservice: MissionControlService,
    private activatedrouteservice: ActivatedRoute,
    private router = Router,
  ) { }

  onLoad () {
    const missionid = this.activatedrouteservice.snapshot.params["id"]
    if (!missionid) return

    this.missioncontrolservice.GetMissionByMissionID(missionid).subscribe (
       mission => {
       if ( mission == null ) return

       }
    )
   }
}


