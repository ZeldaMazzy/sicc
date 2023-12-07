import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionControlComponent } from './mission-control.component';
import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionEditComponent } from './mission-edit/mission-edit.component';

const routes: Routes = [{
  path: ':mission-id',
  component: MissionControlComponent
},
{path: 'mission-list',
component: MissionListComponent},
{path: 'add',
component: MissionEditComponent},
{path: 'edit/:id',
component: MissionEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionControlRoutingModule { }
