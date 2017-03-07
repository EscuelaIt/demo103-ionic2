import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(
    public http: Http
  ) {}

  getAll(){
    return new Promise((resolve, reject)=>{
      this.http.get('https://randomuser.me/api/?results=20')
      .map(response => response.json())
      .subscribe(data =>{
        resolve(data)
      })
    });
  }

}
