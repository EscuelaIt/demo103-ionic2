import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TutorialPage } from '../pages/tutorial/tutorial';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { InvitePage } from '../pages/invite/invite';
import { TabsPage } from '../pages/tabs/tabs';
import { TabTasksPage } from '../pages/tab-tasks/tab-tasks';
import { MapPage } from '../pages/map/map';

import { AngularFireAuth } from 'angularfire2';

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
    },
    {
      title: 'Map',
      component: MapPage
    }
  ]

  rootPage: any = TutorialPage;

  constructor(
    menuCtrl: MenuController,
    platform: Platform,
    public authFire: AngularFireAuth
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.listerStateAuth();
    });
  }

  openPage( page ){
    this.rootPage = page.component;
  }

  logout(){
    this.authFire.logout();
  }

  private listerStateAuth(){
    this.authFire.subscribe(session=>{
      if(session){
        this.rootPage = TabTasksPage;
      }else{
        this.rootPage = TutorialPage;
      }
    })
  }

}
