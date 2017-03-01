import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InvitePage } from '../invite/invite';
import { TutorialPage } from '../tutorial/tutorial';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  goToInvitePage(){
    this.navCtrl.push( InvitePage );
  }

  goToTutorialPage(){
    this.navCtrl.push( TutorialPage );
  }

  goToBack(){
    this.navCtrl.pop();
  }

}
