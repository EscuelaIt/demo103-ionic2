import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController, ActionSheetController } from 'ionic-angular';

import { GalleryPage } from '../gallery/gallery';

@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {

  event: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public actionCtrl: ActionSheetController
  ) {
    this.event = this.navParams.get('event');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailPage');
  }

  openGallery(){
    let modal = this.modalCtrl.create( GalleryPage );
    modal.present();
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

  showActionSheet(){
    let action = this.actionCtrl.create({
      buttons: [
        {
          text: 'Asistir',
          icon: 'home',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Share',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    action.present();
  }

}
