import { Injectable } from '@angular/core';
import { Task } from '../shared/models/task';
import { EMPTY, Observable, findIndex, of } from 'rxjs';
import { TEST_DATA_MISSIONTASKS } from '../shared/stub/tasks-for-mcs.stub';


@Injectable({
  providedIn: 'root'
})

export class TasksService {

  constructor() { }
  GetAllTasks(): Observable<Task[]> {
    return of (TEST_DATA_MISSIONTASKS)
  }

  GetTasksByTasksID(TaskID: string): Observable<Task | null> {
    const task: Task| undefined = TEST_DATA_MISSIONTASKS.find(TasksID => {
      return task.TaskID == TaskID;
    })
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


}
