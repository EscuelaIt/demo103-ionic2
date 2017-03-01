import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html'
})
export class InvitePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitePage');
  }

  goToBack(){
    this.navCtrl.pop();
  }

  intro(){
    this.navCtrl.setRoot(HomePage);
  }

}
