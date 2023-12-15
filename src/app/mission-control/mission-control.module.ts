import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionControlRoutingModule } from './mission-control-routing.module';
import { MissionColumnsComponent } from './mission-columns/mission-columns.component';
import { MissionControlComponent } from './mission-control.component';
import { TasksModule } from '../tasks/tasks.module';


@NgModule({
  declarations: [MissionControlComponent,
    MissionColumnsComponent],
  imports: [
    CommonModule,
    MissionControlRoutingModule,
    TasksModule,
  ]
})
export class MissionControlModule { }
