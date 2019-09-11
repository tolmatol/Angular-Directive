import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  { 
  title="Student name list";
  studentNames = ["Student1", "Student2", "Student3", "Student4", "Student5"];
}
