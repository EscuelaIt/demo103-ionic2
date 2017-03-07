import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { UserService } from '../../providers/user-service';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  users: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService,
    public loadCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    let load = this.loadCtrl.create();
    load.present();
    this.userService.getAll()
    .then((data:any) =>{
      load.dismiss();
      this.users = data.results;
    })
  }

}
