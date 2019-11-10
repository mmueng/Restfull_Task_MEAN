import { Component, OnInit } from '@angular/core';
// Inject the Service 
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Task Api';
  tasks = [];
  task_id: any;
  id = '';
  task = [];
  openform: boolean;
  showdetail: boolean;
  newTask: any;
  edit_task: any;
  lastTask = { title: "", description: "", compleated: false };
  oneTask: any;
  // Make attribute of httpservice
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.openform = false;
    this.showdetail = false;
    this.oneTask = { title: "", description: "", compleated: false };
    this.edit_task = { title: "", description: "", compleated: false };
    this.newTask = { title: '', description: '' };
    // this.getTasksFromService();
    // this.onButtonClick();
  }
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe((data: any) => {
      console.log("Got our Tasks!", data);
      this.tasks = data["result"];
      // this.getOneTaskFromService(this.tasks[this.tasks.length-1]._id);
      // this.lastTask = this.tasks[this.tasks.length - 1];
      // console.log("one t:", this.lastTask);
      console.log("tasks: ", this.tasks)
    });
  }
  getOneTaskFromService(id) {
    this.showdetail = !this.showdetail;
    let observable = this._httpService.getOne(id);
    observable.subscribe(data => {
      console.log("One Task!!", data);
      this.oneTask = data['result'];
      console.log("One Task", this.oneTask);
    })
  }
  deleteTaskFromService(id) {
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => {
      console.log("Deleted Task", data);
      this.task_id = id;
    });
  }

  onSubmit() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      // Reset this.newTask to a new, clean object.
      this.newTask = { title: "", description: "" }

    });
  }
  showEditForm(id) {
    this.openform = !this.openform;
    // this.showdetail = !this.showdetail;
    let observable = this._httpService.getOne(id);
    observable.subscribe(data => {
      console.log("One Task!!", data);
      this.edit_task = data['result'];
      console.log("One task to edit ", this.edit_task);
    });
  }

  onEdit() {
    // edit_task.showEditForm = false;
    let observable = this._httpService.editTask(this.edit_task);
    observable.subscribe(data => {
      console.log('Edit ', data);
      // this.edit_task = data;
      this.getTasksFromService()
    });
  }
}

