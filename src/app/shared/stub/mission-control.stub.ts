import { filter } from "rxjs";
import { Mission } from "../models/mission";
import { Task } from "../models/task";
import { TEST_DATA_MISSIONTASKS } from "./tasks-for-mcs.stub";


export const TEST_DATA_MISSIONDATA: Mission[] = [
    {
        MissionID: '12354',
        MissionBudget: 999999,
        Description: 'Mission to Uranus',
        MissionName: 'Artemis',
        LaunchDate: new Date('4/1/2420'),
        MissionTagline: 'Deep Dive Into the Unknown',
        ListOfTasks: TEST_DATA_MISSIONTASKS.filter(task => {
            return task.MissionID == '12354'
        }),
    },
    {
        MissionID: '123124',
        MissionBudget: 9994999,
        Description: 'Another mission with data',
        MissionName: 'The Mission 2',
        LaunchDate: new Date('12/26/2077'),
        MissionTagline: 'the mission tags',
        ListOfTasks: TEST_DATA_MISSIONTASKS.filter(task => {
            return task.MissionID == '123124'
        }),
    },
    {
        MissionID: '123432423454',
        MissionBudget: 9993999,
        Description: 'A mission with datas',
        MissionName: 'The Big Mission',
        LaunchDate: new Date('12/27/2077'),
        MissionTagline: 'the missions tag',
        ListOfTasks: TEST_DATA_MISSIONTASKS.filter(task => {
            return task.MissionID == '123432423454'
        }),
    }
]
