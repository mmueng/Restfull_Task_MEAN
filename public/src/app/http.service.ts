import { Injectable } from '@angular/core';
// import http client
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // Then make attribute of the class
  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getOne();
    this.delete();
    // this.addtask();
    this.getTasks();
  }

  getTasks() {
    let tempObservable = this._http.get('/task');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }

  getOne() {
    let tempObservable = this._http.get('/task/5dc3b88967f4220430fe25e7');
    tempObservable.subscribe(data => console.log("One Task", data));
  }

  delete() {
    let tempObservable = this._http.delete("task/remove/5dc3b88967f4220430fe25e7");
    tempObservable.subscribe(data => console.log("Delete Task", data));
  }


}
