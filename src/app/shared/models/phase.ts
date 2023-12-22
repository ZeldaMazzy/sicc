import { Task } from "./task";

export interface Phase {
  PhaseID: number | null;
  PhaseName: string | null;
  ListOfTasks: Task[];
  ConnectsTo: string[];
}

