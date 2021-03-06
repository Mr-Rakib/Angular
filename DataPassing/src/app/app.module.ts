import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildComponentComponent } from './child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
