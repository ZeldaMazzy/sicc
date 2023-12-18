import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from './task-card/task-card.component';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TaskCardComponent,
    TasksComponent,
    EditTaskComponent,
    TaskDetailsComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule
  ],
  exports: [
    TaskCardComponent,
  ]
})
export class TasksModule { }
