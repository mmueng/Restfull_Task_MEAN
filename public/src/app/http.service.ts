import { Injectable } from '@angular/core';
// import http client
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // Then make attribute of the class
  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.getOne();
    // this.delete();
    // this.addtask();
    // this.getTasks();
  }

  getTasks() {
    // let tempObservable = this._http.get('/task');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/task');
  }

  getOne(id) {
    // let tempObservable = this._http.get('/task/5dc3b88967f4220430fe25e7');
    // tempObservable.subscribe(data => console.log("One Task", data));
    return this._http.get(`/task/${id}`);
  }
  addTask(newtask) {
    return this._http.post("/task/new", newtask);
  }
  deleteTask(id) {
    console.log("service id : ", id);
    // let tempObservable = this._http.delete("task/remove/5dc3b88967f4220430fe25e7");
    // tempObservable.subscribe(data => console.log("Delete Task", data));
    return this._http.delete(`/task/remove/${id}`);
  }

  editTask(edit_task) {
    console.log("Edit id: ", edit_task);
    return this._http.put(`/task/edit/${edit_task._id}`, edit_task);
  }

}
