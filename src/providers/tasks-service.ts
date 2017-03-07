import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TasksService {

  private path: string = 'https://jsonplaceholder.typicode.com';

  constructor(
    public http: Http
  ) {}

  getAll(){
    return new Promise((resolve, reject)=>{
      this.http.get(this.path + '/todos?userId=1')
      .map(response => response.json())
      .subscribe(data =>{
        resolve(data)
      })
    });
  }

  create(task){
    return new Promise((resolve, reject)=>{
      this.http.post(this.path + '/todos', task)
      .map(response => response.json())
      .subscribe(data =>{
        resolve(data)
      })
    });
  }

  update(task){
    return new Promise((resolve, reject)=>{
      this.http.put(this.path + '/todos/' + task.id, task)
      .map(response => response.json())
      .subscribe(data =>{
        resolve(data)
      })
    });
  }

  delete(idTask){
    return new Promise((resolve, reject)=>{
      this.http.delete(this.path + '/todos/' + idTask)
      .map(response => response.json())
      .subscribe(data =>{
        resolve(data)
      })
    });
  }

}
