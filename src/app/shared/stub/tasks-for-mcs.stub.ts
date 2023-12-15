import { Task } from "../models/task";

export const TEST_DATA_MISSIONTASKS: Task[] = [
    {
        TaskID: '1234',
        TaskName: 'Prepare',
        MissionID: '12354',
        TaskDescription: 'Get ready!',
        TaskDeadline: new Date('12/23/2077'),
        TaskBudget: 999,
        TaskCategory: 'Initial',
        PhaseID: 0,
    },
    {
        TaskID: '1235',
        TaskName: 'Proceed',
        MissionID: '12354',
        TaskDescription: 'Go ON!',
        TaskDeadline: new Date('12/24/2077'),
        TaskBudget: 999,
        TaskCategory: 'Initial',
        PhaseID: 1,
    },
    {
        TaskID: '1236',
        TaskName: 'Prepare for Return',
        MissionID: '123124',
        TaskDescription: 'Go!',
        TaskDeadline: new Date('12/26/2077'),
        TaskBudget: 999,
        TaskCategory: 'On Route',
        PhaseID: 2,
    },
    {
        TaskID: '1237',
        TaskName: 'Return',
        MissionID: '123124',
        TaskDescription: 'Return!',
        TaskDeadline: new Date('12/27/2077'),
        TaskBudget: 999,
        TaskCategory: 'On Route',
        PhaseID: 0,
    },
    {
        TaskID: '1238',
        TaskName: 'Dance Party',
        MissionID: '123432423454',
        TaskDescription: 'Party time!',
        TaskDeadline: new Date('12/31/2077'),
        TaskBudget: 999,
        TaskCategory: 'End',
        PhaseID: 1,
    }
]
