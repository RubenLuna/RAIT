import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FindridePage } from '../findride/findride';
import { SearchridePage } from '../searchride/searchride';
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

  fxFindRide(){
    this.navCtrl.push(FindridePage);

  }

  fxSearchRide(){
    this.navCtrl.push(SearchridePage);

  }

}
