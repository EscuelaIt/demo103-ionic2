import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventsPage } from '../events/events'
import { MyEventsPage } from '../my-events/my-events'
import { PastEventsPage } from '../past-events/past-events'
import { HomePage } from '../home/home'
import { UsersPage } from '../users/users'

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = MyEventsPage;
  tab3Root: any = PastEventsPage;
  tab4Root: any = UsersPage;

  constructor(public navCtrl: NavController) {

  }

}