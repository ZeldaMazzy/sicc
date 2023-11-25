export interface Task {
    TaskID: string | null;
    MissionID: string | null;
    TaskName: string;
    TaskDescription: string;
    TaskDeadline: Date;
    TaskBudget: number;
    TaskCategory: string;
    PhaseID: number | null;
}