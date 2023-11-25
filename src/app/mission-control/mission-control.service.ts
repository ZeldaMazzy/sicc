import { Injectable } from '@angular/core';
import { Mission } from '../shared/models/mission';
import { EMPTY, Observable, findIndex, of } from 'rxjs';
import { TEST_DATA_MISSIONDATA } from '../shared/stub/mission-control.stub';

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

  UpdateMission(missionToChange: Mission): Observable<Mission> {
    const missionIndex: number = TEST_DATA_MISSIONDATA.findIndex(mission => {
      return mission.MissionID === missionToChange.MissionID;
    })
    TEST_DATA_MISSIONDATA[missionIndex] = missionToChange;
    return of(missionToChange);
  }

  AddNewMission(addMission: Mission): Observable<Mission> {
    TEST_DATA_MISSIONDATA.push();
    return of(addMission)
  }

  RemoveMission(deleteMission: Mission): Observable<void> {
    const missionIndex: number = TEST_DATA_MISSIONDATA.findIndex(mission => {
      return mission.MissionID === deleteMission.MissionID;
    })
    TEST_DATA_MISSIONDATA.splice(missionIndex);
    return EMPTY;
  }
}