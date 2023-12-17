import { Component, Input } from '@angular/core';
import { Task } from 'src/app/shared/models/task';
import { TasksService } from '../tasks.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {
task!: Task;

constructor(
  private tasksService: TasksService,
  private routerService: Router,
){}
}
