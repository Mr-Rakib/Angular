import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReusableComponent';
  data =[];

  ngOnInit():  void {
    fetch("../assets/users.json").then(response => response.json())
    .then(data => this.data = data)
    .catch(error => console.warn(error));
  }
}
