import { Injectable } from '@angular/core';
import { Mission } from '../shared/models/mission';
import { EMPTY, Observable, findIndex, of } from 'rxjs';
import { TEST_DATA_MISSIONDATA } from '../shared/stub/mission-control.stub';
/*
Mission Control Service

Fill out the mission control service with CRUD operations. Each operation should return an observable with test data, as we have not set up a backend yet.

Here are the acceptance criteria:
    Create an updateMission endpoint, which returns the updated Mission in an observable
    Create an addNewMission endpoint, which returns an created Mission in an observable
    Create a deleteMission endpoint, which returns an empty observable

*/
@Injectable({
  providedIn: 'root'
})

export class MissionControlService {
  constructor() { }

  GetAllMissions(): Observable<Mission[]> {
    return of(TEST_DATA_MISSIONDATA)
  }

  GetMissionByMissionID(MissionID: string): Observable<Mission | null> {
    const mission: Mission | undefined = TEST_DATA_MISSIONDATA.find(mission => {
      return mission.MissionID == MissionID;
    })
    return of(mission || null);
  }

  UpdateMission(mission: Mission): EMPTY {
    const missionIndex: Mission.findIndex(mission => {

    })
  }
}
