import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, AdminRoutingComponents } from './admin-routing.module';


@NgModule({
  declarations: [AdminRoutingComponents],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
