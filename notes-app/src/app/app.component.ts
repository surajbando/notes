import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notes-app';
  menuOptions = [
    {
      title: "Add Notes",
      path: "/add-notes"
    }, {
      title: "View Notes",
      path: "/view-notes"
    }
    ]
}
