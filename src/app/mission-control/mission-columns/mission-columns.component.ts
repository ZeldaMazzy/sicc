import { Component, Input } from '@angular/core';
import { Mission } from 'src/app/shared/models/mission';
import { Task } from 'src/app/shared/models/task';
import { TasksComponent } from 'src/app/tasks/tasks.component';
import { TasksService } from 'src/app/tasks/tasks.service';
import { Subscription } from 'rxjs';
import { Phase } from 'src/app/shared/models/phase';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mission-columns',
  templateUrl: './mission-columns.component.html',
  styleUrls: ['./mission-columns.component.scss'],
})

export class MissionColumnsComponent {
  missionTaskList: Task[] = [];
  @Input() missionID: string = "";
  phases: Phase[] = [
     { PhaseID: 0,
      PhaseName: 'To Do',
      ListOfTasks: [],
      ConnectsTo: ['card-list1'] },

     { PhaseID: 1,
      PhaseName: 'Planning',
      ListOfTasks: [],
      ConnectsTo: ['card-list0','card-list2'] },

    { PhaseID: 2,
      PhaseName: 'In Progress',
      ListOfTasks: [],
      ConnectsTo: ['card-list1'] }
    ]

  // drop(event: CdkDragDrop<Phase>) {
  //   moveItemInArray(this.phases, event.previousIndex, event.currentIndex);

  //   console.log (event)
  // }

  dropTask(event: CdkDragDrop<Task[]>, taskList: Task[])
    {
      console.log(event);
      console.log(taskList);
      if (event.previousContainer === event.container) {
        moveItemInArray(taskList, event.previousIndex, event.currentIndex);
      }
      else {
        transferArrayItem(event.previousContainer.data, taskList, event.previousIndex, event.currentIndex);
      }
    }

  navigateToTask(TaskID: string|null)
    {if (!TaskID) return;
    this.router.navigate(['tasks','task-details',TaskID])

  }

  constructor(private tasksService: TasksService, private router: Router) { }

    ngOnInit(): void {
      this.tasksService.GetTasksByMissionID(this.missionID).subscribe((missionTaskList) => {
        this.missionTaskList = missionTaskList
        console.log (missionTaskList)
        this.phases[0].ListOfTasks = this.missionTaskList.filter((task) => task.PhaseID === 0)
        this.phases[1].ListOfTasks = this.missionTaskList.filter((task) => task.PhaseID === 1)
        this.phases[2].ListOfTasks = this.missionTaskList.filter((task) => task.PhaseID === 2)
        console.log (this.phases)
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


