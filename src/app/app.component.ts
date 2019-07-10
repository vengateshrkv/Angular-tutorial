import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-angular';
  public name = "From Parent"
  message:string
  getChild($event) {
    console.log($event)
    this.message = $event
  }
}
