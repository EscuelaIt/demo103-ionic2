import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  latitude: number = 0;
  longitude: number = 0;

  map:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.getPosition();
  }

  private getPosition(){
    Geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.renderMap();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  private renderMap(){
    let mapEle = document.getElementById('map');
    this.map = new google.maps.Map(mapEle, {
      center: {lat: this.latitude, lng: this.longitude},
      zoom: 12
    });

    let marker = new google.maps.Marker({
      position: {lat: this.latitude, lng: this.longitude},
      map: this.map,
      title: 'Aqui estoy!'
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      google.maps.event.trigger(mapEle, 'resize');
    });
  }

}
