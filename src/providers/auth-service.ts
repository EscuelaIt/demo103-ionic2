import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(
    public authFire: AngularFireAuth
  ) {}

  register(email:string, password:string){
    return this.authFire.createUser({
      email: email,
      password: password,
    })
  }

  login(email: string, password: string){
    return this.authFire.login({
      email: email,
      password: password
    })
  }

}
