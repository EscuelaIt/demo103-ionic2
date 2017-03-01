import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { EventDetailPage } from '../event-detail/event-detail';

const EVENTS = [
  {
    title: 'Justin',
    text: 'The most popular industrial group ever, and largel responsible for bringing the music to a mass audience.',
    img: 'http://ionicframework.com/dist/preview-app/www/assets/img/nin-live.png',
    time: new Date(),
    place: 'El coliseo',
    people: '1000'
  },
  {
    title: 'los prisioneros',
    text: 'The most popular industrial group ever, and largel responsible for bringing the music to a mass audience.',
    img: 'http://ionicframework.com/dist/preview-app/www/assets/img/nin-live.png',
    time: new Date(),
    place: 'El coliseo',
    people: '3000'
  },
  {
    title: 'nirvana',
    text: 'The most popular industrial group ever, and largel responsible for bringing the music to a mass audience.',
    img: 'http://ionicframework.com/dist/preview-app/www/assets/img/nin-live.png',
    time: new Date(),
    place: 'El coliseo',
    people: '20000'
  }
]

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  events: any[] = EVENTS;

  constructor(public navCtrl: NavController) {
    
  }

  goToEventDetailPage( eventItem: any ){
    this.navCtrl.push( EventDetailPage, {
      event: eventItem,
    });
  }

}
