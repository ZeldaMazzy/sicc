import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from './task-card/task-card.component';
import { TasksComponent } from './tasks.component';



@NgModule({
  declarations: [
    TaskCardComponent,
    TasksComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TasksModule { }
