import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionControlRoutingModule } from './mission-control-routing.module';
import { MissionColumnsComponent } from './mission-columns/mission-columns.component';


@NgModule({
  declarations: [MissionColumnsComponent],
  imports: [
    CommonModule,
    MissionControlRoutingModule
  ]
})
export class MissionControlModule { }
