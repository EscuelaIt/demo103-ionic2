import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventsPage } from '../events/events'
import { MyEventsPage } from '../my-events/my-events'
import { PastEventsPage } from '../past-events/past-events'
import { HomePage } from '../home/home'

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  tab1Root: any = HomePage;
  tab2Root: any = MyEventsPage;
  tab3Root: any = PastEventsPage;

  constructor(public navCtrl: NavController) {

  }

}
