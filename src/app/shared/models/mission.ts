import { Task } from "./task";

export interface Mission {
    MissionID: string | null;
    MissionBudget: number;
    Description: string;
    MissionName: string;
    LaunchDate: Date;
    MissionTagline: string;
    ListOfTasks: Task[];
}

// Get ahold of Zelda when I react "Add a new hero"
