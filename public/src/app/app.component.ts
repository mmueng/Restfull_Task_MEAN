import { Component } from '@angular/core';
// Inject the Service 
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Api';

  // Make attribute of httpservice
  constructor(private _httpService: HttpService) {

  }
}
