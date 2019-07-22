import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PosComponent } from './pos.component';
import { PosHomeComponent } from './pos-home/pos-home.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [PosComponent, PosHomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PosRoutingModule
  ]
})
export class PosModule { }
