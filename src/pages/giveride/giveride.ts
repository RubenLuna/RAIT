import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the GiveridePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-giveride',
  templateUrl: 'giveride.html',
})
export class GiveridePage {
  data: Observable<any>;
  strgrFrom: string;
  strgrWhere: string;
  strgrDate: string;
  strgrHour: string
  strEmail: string
  intAuto: string
  items: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: HttpClient) {

    this.fxGetCities();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GiveridePage');
  }


  fxAlert(strTitle: string, strSubtitle: string) {

    const alert = this.alertCtrl.create({
      title: strTitle,
      subTitle: strSubtitle,
      buttons: ['OK']

    });
    alert.present();

  }


  fxGetCities() {

    var url = 'http://192.168.1.70/RAIT/v1/getCities.php';
    //var url = 'https://jsonplaceholder.typicode.com/posts/1';



    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    //let postData = new FormData();
    //postData.append('email', this.email);
    //postData.append('password', this.password);

    let datos = { 'null': null, 'nulls': null };



    /*let datos = {
       "jsonRaitData": [
         { 'email': this.email, 'password': this.password },
         ]
     }*/

    this.data = this.http.post(url, datos, options);
    this.data.subscribe(data => {
      console.log(data);
      //this.navCtrl.push(MainPage);
      if (data.error) {

        this.fxAlert('Error', data.message);
        return;

      } else {
        //this.navCtrl.push(MainPage);
        //this.strfrWhere = data;
        this.items = data.row;

        //console.log(this.strfrWhere);
      }
    },
      error => {
        console.log(error);
        this.fxAlert('Error', error);
        return;
      });





  }

  fxGiveRide() {

    if (this.strgrFrom == '' || this.strgrFrom == undefined || this.strgrFrom.length < 1 ||
      this.strgrWhere == '' || this.strgrWhere == undefined || this.strgrWhere.length < 1 ||
      this.strgrDate == '' || this.strgrDate == undefined || this.strgrDate.length < 1) {


      this.fxAlert('Error', 'Favor de llenar los campos');
      return;
    }else{

      var url = 'http://192.168.1.70/RAIT/v1/giveRide.php';

      let options = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };


      let datos = { 'strgrFrom': this.strgrFrom, 'strgrWhere': this.strgrWhere, 'strgrDate': this.strgrDate, 'strEmail': this.strEmail, 'intAuto': this.intAuto };


      this.data = this.http.post(url, datos, options);
      this.data.subscribe(data => {
        console.log(data);
        if (data.error) {

          this.fxAlert('Error', data.message);
          return;

        } else {

          this.items = data.row;

        }
      },
        error => {
          console.log(error);
          this.fxAlert('Error', error);
          return;
        });

    }

  }

  fxConsolelog() {
    console.log('From: ', this.strgrFrom);
    console.log('Where: ', this.strgrWhere);
    console.log('Date: ', this.strgrDate);
    console.log('Hour: ', this.strgrHour);


  }



}
