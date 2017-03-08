import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class TasksServiceStorage {

  private key = 'tasks';

  constructor(
    public storage: Storage
  ) {}

  getAll(){
    return new Promise((resolve, reject)=>{
      //this.storage.clear()
      this.storage.get(this.key)
      .then(data=>{
        if(data){
          console.log('entro');
          resolve(JSON.parse(data))
        }else{
          reject('data is null')
        }
      })
      .catch(error =>{
        reject(error)
      })
    })
  }

  create(tasks){
    return this.storage.set(this.key, JSON.stringify(tasks));
  }

}
