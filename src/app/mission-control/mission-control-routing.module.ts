import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionControlComponent } from './mission-control.component';
import { MissionListComponent } from './mission-list/mission-list.component';

const routes: Routes = [{
  path: ':mission-id',
  component: MissionControlComponent
},
{path: 'mission-list',
component: MissionListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionControlRoutingModule { }
