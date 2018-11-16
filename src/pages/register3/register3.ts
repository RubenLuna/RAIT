import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { TestPage } from '../test/test';
import { MainPage } from '../main/main';
/**
 * Generated class for the Register3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register3',
  templateUrl: 'register3.html',
})

export class Register3Page {

  strName: string;
  strLastName: string;
  strMonth: string;
  strYear: string;
  strGender: string;
  bOffers: boolean;
  jsonData: string;
  strEmail: string;
  strPassword: string;
  strRePassword: string;

  data: Observable<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: HttpClient) {

    this.strName = navParams.get('strName');
    this.strLastName = navParams.get('strLastName');
    this.strMonth = navParams.get('strMonth');
    this.strYear = navParams.get('strYear');
    this.bOffers = navParams.get('bOffers');
    this.jsonData = navParams.get('jsonData');
    this.strEmail = navParams.get('strEmail');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register3Page');
  }


  fxAlert(strTitle: string, strSubtitle: string) {

    const alert = this.alertCtrl.create({
      title: strTitle,
      subTitle: strSubtitle,
      buttons: ['OK']

    });
    alert.present();

  }


  fxRegister3() {



    /*var obj = JSON.parse(this.jsonData);

    alert(obj.strName);
    */

    if (this.strName == '' || this.strLastName == '' || this.strName == undefined || this.strLastName == undefined
      || this.strName.length < 2 || this.strLastName.length < 2
      || this.strMonth == '' || this.strYear == '' || this.strMonth == undefined || this.strYear == undefined
      || this.strMonth.length < 2 || this.strYear.length < 2
      || this.strGender == '' || this.strGender == undefined
      || this.strGender.length < 1
      || this.strEmail == undefined
      || this.strEmail.length < 2
      || this.strPassword == '' || this.strPassword == undefined || this.strPassword.length < 2
      || this.strRePassword == '' || this.strRePassword == undefined || this.strRePassword.length < 2
      ) {
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Favor de llenar los campos',
        buttons: ['OK']
      });
      alert.present();

      return;
    }

    if( this.strPassword != this.strRePassword ){
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'La contrasenia no coincide',
        buttons: ['OK']
      });
      alert.present();

      return;

    }

    /*console.log("Name " + this.strName);
    console.log("Last Name " + this.strLastName);
    console.log("Month " + this.strMonth);
    console.log("Year " + this.strYear);
    console.log("Gender " + this.strGender);
    console.log("Offers " + this.bOffers);
    console.log("Email " + this.strEmail);
    console.log("jsonData " + this.jsonData);*/


    var url = 'http://192.168.1.70/RAIT/v1/registerUser.php';
    //var url = 'https://jsonplaceholder.typicode.com/posts/1';


    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    //this.strPassword = 'asdtttPASS';

    let datos = {
      'strName': this.strName,
      'strLastName': this.strLastName,
      'strMonth': this.strMonth,
      'strYear': this.strYear,
      'strGender': this.strGender,
      'bOffers': this.bOffers,
      'strEmail': this.strEmail,
      'strPassword': this.strPassword
    };




    this.data = this.http.post(url, datos, options);
    this.data.subscribe(data => {
      console.log(data);
      //this.navCtrl.push(MainPage);
      if (data.error) {

        this.fxAlert('Error', data.message);
        return;

      } else {
        this.navCtrl.push(MainPage);
      }
    },
      error => {
        console.log(error);
        this.fxAlert('Error', error.message);
      });








  }

}
