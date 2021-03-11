import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListsComponent } from './lists/lists.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

console.warn("User Module Calls");

@NgModule({
  declarations: [ListsComponent, CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
