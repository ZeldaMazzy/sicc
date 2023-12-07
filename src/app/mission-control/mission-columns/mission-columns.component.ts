import { Component, Input } from '@angular/core';
import { Mission } from 'src/app/shared/models/mission';
import { Task } from 'src/app/shared/models/task';
import { TasksComponent } from 'src/app/tasks/tasks.component';
import { TasksService } from 'src/app/tasks/tasks.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-mission-columns',
  templateUrl: './mission-columns.component.html',
  styleUrls: ['./mission-columns.component.scss']
})
export class MissionColumnsComponent {
  missionTaskList: Task[] = [];
  @Input() missionID: string = "";

    constructor(private tasksService: TasksService) { }

    ngOnInit(): void {
      this.tasksService.GetTasksByMissionID(this.missionID).subscribe((missionTaskList) => this.missionTaskList = missionTaskList
    )}

    phases = [
      { title: 'To Do', content: 'To Do Content' },
      { title: 'Planning', content: 'Planning Content' },
      { title: 'In Progress', content: 'In Progress Content' }

    ];
}







