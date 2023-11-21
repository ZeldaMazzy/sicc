import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionControlComponent } from './mission-control.component';

const routes: Routes = [{
  path: '',
  component: MissionControlComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionControlRoutingModule { }
