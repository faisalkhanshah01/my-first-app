import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students: Array<any>;
  constructor(private _dataService: DataService) {
    this._dataService.getStudents().subscribe(response => this.students = response);
  }

}
