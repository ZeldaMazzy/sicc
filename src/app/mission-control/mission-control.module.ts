import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionControlRoutingModule } from './mission-control-routing.module';
import { MissionColumnsComponent } from './mission-columns/mission-columns.component';
import { MissionControlComponent } from './mission-control.component';
import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionCardComponent } from './mission-card/mission-card.component';


@NgModule({
  declarations: [MissionControlComponent,
    MissionColumnsComponent,
    MissionListComponent,
    MissionCardComponent],
  imports: [
    CommonModule,
    MissionControlRoutingModule
  ]
})
export class MissionControlModule { }
