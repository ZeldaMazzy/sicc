import { ActivatedRoute, Router } from '@angular/router';
import { OnInit, Component } from '@angular/core';
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
  onDelete () {
    if(confirm("Are you sure you want to delete "+ this.task.TaskName + "?")) {
      this.taskservice.RemoveTask(this.task).subscribe (
        () => {
          this.router.navigate(['mission-control', 'mission-list'])

        }
      )
    }

  }

  constructor (
    private taskservice: TasksService,
    private activatedroute: ActivatedRoute,
    private router: Router,
  ) {  }

  onEdit() {
    this.router.navigate(['tasks', 'edit-tasks', this.task.TaskID])
  }

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

