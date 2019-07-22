import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosComponent } from './pos.component';
import { PosHomeComponent } from './pos-home/pos-home.component';

const routes: Routes = [
  {
    path: '', component: PosComponent, children: [
      { path: '', redirectTo: '/pos/home', pathMatch: 'full' },
      { path: 'home', component: PosHomeComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosRoutingModule { }
