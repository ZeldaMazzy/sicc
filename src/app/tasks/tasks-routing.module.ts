import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'add-new-task', component: EditTaskComponent },
  { path: 'add-new-task/:mission-id/:phase-id', component: EditTaskComponent },
  { path: 'edit-task/:task-id', component: EditTaskComponent },
  { path: 'task-details/:task-id', component: TaskDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TasksRoutingModule { }
