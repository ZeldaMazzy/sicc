import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { DropdownDirective } from './directives/dropdown.directive';



@NgModule({
  declarations: [
    NavigationComponent,
    DropdownDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavigationComponent,
    DropdownDirective
  ],
})
export class SharedModule { }
