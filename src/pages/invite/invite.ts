import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html'
})
export class InvitePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitePage');
  }

  goToBack(){
    this.navCtrl.pop();
  }

  intro(){
    if(this.platform.is('ios')){
      this.navCtrl.setRoot(HomePage);
    }else{
      this.navCtrl.setRoot(HomePage);
    }
    
  }

}
