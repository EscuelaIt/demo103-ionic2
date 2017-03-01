import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TutorialPage } from '../pages/tutorial/tutorial';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { InvitePage } from '../pages/invite/invite';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  pages: any[] =[
    {
      title: 'Home',
      component: HomePage
    },
    {
      title: 'Profile',
      component: ProfilePage
    },
    {
      title: 'Settings',
      component: SettingsPage
    },
    {
      title: 'Invite',
      component: InvitePage
    }
  ]

  rootPage: any = HomePage;

  constructor(
    menuCtrl: MenuController,
    platform: Platform
    ) {

      menuCtrl.enable(true, 'admin');
      menuCtrl.enable(false, 'user');

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage( page ){
    this.rootPage = page.component;
  }

}
