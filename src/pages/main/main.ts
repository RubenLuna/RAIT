import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FindridePage } from '../findride/findride';
import { GiveridePage } from '../giveride/giveride';
import { AddvehiclePage } from '../addvehicle/addvehicle';

import { TestPage } from '../test/test';
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  fxGoFindRide(){
    this.navCtrl.push(FindridePage);

  }

  fxGoGiveRide(){
    this.navCtrl.push(GiveridePage);

  }

  fxGoAddVehicle(){
    this.navCtrl.push(AddvehiclePage);

  }

}
