import { Component, Input } from '@angular/core';
import { Mission } from 'src/app/shared/models/mission';
import { Task } from 'src/app/shared/models/task';


@Component({
  selector: 'app-mission-columns',
  templateUrl: './mission-columns.component.html',
  styleUrls: ['./mission-columns.component.scss']
})
export class MissionColumnsComponent {
  @Input() missionTaskList: Task[] = [];
}
