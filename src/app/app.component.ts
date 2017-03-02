import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TutorialPage } from '../pages/tutorial/tutorial';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { InvitePage } from '../pages/invite/invite';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  pages: any[] =[
    {
      title: 'Home',
      component: TabsPage
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

  rootPage: any = TabsPage;

  constructor(
    menuCtrl: MenuController,
    platform: Platform
    ) {
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
