import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'add-new-task', component: EditTaskComponent },
  { path: 'add-new-task/:mission-id/:phase-id', component: EditTaskComponent },
  { path: 'edit-task/:task-id', component: EditTaskComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TasksRoutingModule { }
