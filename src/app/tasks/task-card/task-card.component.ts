import { Component, Input } from '@angular/core';
import { Task } from 'src/app/shared/models/task';
import { TEST_DATA_MISSIONTASKS } from 'src/app/shared/stub/tasks-for-mcs.stub';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  @Input() task: Task = { ...TEST_DATA_MISSIONTASKS[0] };

  open = false;

  closeOnClick() {
    this.open = false;
  }
}
