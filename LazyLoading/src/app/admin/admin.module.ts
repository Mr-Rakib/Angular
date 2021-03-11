import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListsComponent } from './lists/lists.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';

console.log("Ädmin Module Calls");

@NgModule({
  declarations: [ListsComponent, UpdateComponent, CreateComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
