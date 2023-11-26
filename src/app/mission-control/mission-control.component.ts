import { Component, OnInit } from '@angular/core';
import { Mission } from '../shared/models/mission';
import { TEST_DATA_MISSIONDATA } from '../shared/stub/mission-control.stub';
import { MissionControlService } from './mission-control.service';
import { ActivatedRoute } from '@angular/router';
//inject mission control and 
@Component({
  selector: 'app-mission-control',
  templateUrl: './mission-control.component.html',
  styleUrls: ['./mission-control.component.scss']
})


export class MissionControlComponent implements OnInit {
  public mission: Mission = { ...TEST_DATA_MISSIONDATA[0] }
  constructor(private missionControlService: MissionControlService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const id: string = this.route.snapshot.params['mission-id'];
    this.missionControlService.GetMissionByMissionID(id)
      .subscribe(
        {
          next: mission => { if (mission != null) this.mission = mission }
        }
      )
  }
}