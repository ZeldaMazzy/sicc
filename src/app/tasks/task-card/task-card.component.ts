import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/shared/models/task';
import { TEST_DATA_MISSIONTASKS } from 'src/app/shared/stub/tasks-for-mcs.stub';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  @Input() task: Task = { ...TEST_DATA_MISSIONTASKS[0] };
  @Output() deleto = new EventEmitter<Task>()

  open = false;

  constructor(
    public taskrouting: Router,
  ) { }

  closeOnClick() {
    this.open = false;
  }

  onEdit() {
    this.taskrouting.navigate(['tasks', 'edit-task', this.task.TaskID])
  }

  onDelete() {
    let didConfirm = confirm('Are you sure you want to delete this task?')

    if (didConfirm == true) {
      this.deleto.emit(this.task);
    }
  }
}
