import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { MapPage } from '../map/map';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) {}

  ionViewDidLoad() {
    this.menuCtrl.enable(false, 'admin');
  }

  goToRegisterPage(){
    this.navCtrl.push( RegisterPage );
  }

  goToLoginPage(){
    this.navCtrl.push( LoginPage );
  }

  goToMapPage(){
    this.navCtrl.push( MapPage );
  }

}
