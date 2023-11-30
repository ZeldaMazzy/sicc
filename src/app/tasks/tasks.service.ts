import { Injectable } from '@angular/core';
import { Task } from '../shared/models/task';
import { EMPTY, Observable, findIndex, of } from 'rxjs';
import { TEST_DATA_MISSIONTASKS } from '../shared/stub/tasks-for-mcs.stub';
import { TEST_DATA_MISSIONDATA } from '../shared/stub/mission-control.stub';
import { Mission } from '../shared/models/mission';


@Injectable({
  providedIn: 'root'
})

export class TasksService {

  constructor() { }
  GetAllTasks(): Observable<Task[]> {
    return of (TEST_DATA_MISSIONTASKS)
  }

  GetTaskByTasksID(taskID: string): Observable<Task | null> {
    const task: Task | undefined = TEST_DATA_MISSIONTASKS.find(task => task.TaskID === taskID);
    return of(task || null);
  }

  AddNewTask(addTask: Task): Observable<Task> {
    TEST_DATA_MISSIONTASKS.push();
    return of(addTask)
  }

  UpdateTask(taskToChange: Task): Observable<Task> {
    const taskIndex: number = TEST_DATA_MISSIONTASKS.findIndex(task => {
      return task.TaskID === taskToChange.TaskID;
    })
    TEST_DATA_MISSIONTASKS[taskIndex] = taskToChange;
    return of(taskToChange);
  }

  RemoveTask(deleteTask: Task): Observable<void> {
    const taskIndex: number = TEST_DATA_MISSIONTASKS.findIndex(task => {
      return task.TaskID === deleteTask.TaskID;
    })
    TEST_DATA_MISSIONTASKS.splice(taskIndex);
    return EMPTY;
  }

  GetTasksByMissionID(missionID: string): Observable<Task[]> {
    const tasksForMission: Task[] = TEST_DATA_MISSIONTASKS.filter((task) => task.MissionID === missionID);
    return of(tasksForMission);
  }
}
