import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {

  event: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    this.event = this.navParams.get('event');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailPage');
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'genial! seguro?',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
     
      buttons: [
        {
          text: 'No',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    alert.present();
    alert.onDidDismiss(data =>{
      console.log('cerro');
    })
  }

}
