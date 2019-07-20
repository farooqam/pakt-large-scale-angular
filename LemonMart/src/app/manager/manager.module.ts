import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerComponent } from './manager.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [ManagerHomeComponent, ManagerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
