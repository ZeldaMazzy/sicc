import { Component, Input } from '@angular/core';
import { Mission } from 'src/app/shared/models/mission';
import { Task } from 'src/app/shared/models/task';
import { TasksComponent } from 'src/app/tasks/tasks.component';
import { TasksService } from 'src/app/tasks/tasks.service';
import { Subscription } from 'rxjs';
import { Phase } from 'src/app/shared/models/phase';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';




@Component({
  selector: 'app-mission-columns',
  templateUrl: './mission-columns.component.html',
  styleUrls: ['./mission-columns.component.scss']
})
export class MissionColumnsComponent {
  missionTaskList: Task[] = [];
  @Input() missionID: string = "";
  phases: Phase[] = [
     { PhaseID: 0,
      PhaseName: 'To Do',
      ListOfTasks: [] },

     { PhaseID: 1,
      PhaseName: 'Planning',
      ListOfTasks: [] },

    { PhaseID: 2,
      PhaseName: 'In Progress',
      ListOfTasks: [] },

]
    constructor(private tasksService: TasksService) { }

    ngOnInit(): void {
      this.tasksService.GetTasksByMissionID(this.missionID).subscribe((missionTaskList) => {
        this.missionTaskList = missionTaskList
        this.phases[0].ListOfTasks = this.missionTaskList.filter((task) => task.PhaseID === 0)
        this.phases[1].ListOfTasks = this.missionTaskList.filter((task) => task.PhaseID === 1)
        this.phases[2].ListOfTasks = this.missionTaskList.filter((task) => task.PhaseID === 2)

      }
    )}
}

// DRAFT CODE FOR DRAG & DROP //


    // onDrop(event: CdkDragDrop<Task[]>, phase: Phase) {
    //  if (event.previousContainer === event.container) {
    //    moveItemInArray(phase.ListOfTasks, event.previousIndex, event.currentIndex);
    //  } else {
    //    const task = event.previousContainer.data[event.previousIndex];
    //    transferArrayItem(event.previousContainer.data, phase.ListOfTasks, event.previousIndex, event.currentIndex);


