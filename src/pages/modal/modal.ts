import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import Booking from '../classes/Booking';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  pic = Booking[0];
  title = Booking[1];
  url = Booking[2];
  description = Booking[3];
  date = Booking[4];
  author = Booking[5];

  ionViewDidLoad() {

    Booking.splice(0,6);
  }

  constructor( private navCtl: NavController,private navParams: NavParams) {
    
  }

  

}
