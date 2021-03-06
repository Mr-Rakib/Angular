import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Output() parentFunction : EventEmitter<any> = new EventEmitter()
  constructor() { }

  async ngOnInit() {
    let data = await this.getData();
    this.parentFunction.emit(data);
  }
  async getData()
  {
    let users=[];
    await fetch("../assets/users.json").then(response => response.json())
    .then(data => users = data)
    .catch(err => console.error(err));
    return users;
  }
}
