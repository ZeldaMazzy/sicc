import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from './task-card/task-card.component';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';



@NgModule({
  declarations: [
    TaskCardComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
