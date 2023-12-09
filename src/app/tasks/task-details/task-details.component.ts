import { ActivatedRoute } from '@angular/router';
import { OnInit, Component, Injectable } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from 'src/app/shared/models/task';
import { TEST_DATA_MISSIONTASKS } from 'src/app/shared/stub/tasks-for-mcs.stub';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})

export class TaskDetailsComponent implements OnInit{
  public task: Task = TEST_DATA_MISSIONTASKS [0]
  openDropDown = false;
  closeDropDown() {
    this.openDropDown = false;
  }
  closeOnClick() {
    this.openDropDown = false;
  }

  constructor (
    private taskservice: TasksService,
    private activatedroute: ActivatedRoute,
  ) {  }

  ngOnInit () {
   const taskid = this.activatedroute.snapshot.params["task-id"]

   this.taskservice.GetTaskByTasksID(taskid).subscribe (
    task => {
      if (task == null ) return
      this.task = task
      console.log(this.task)
    }
   )
  }
}

