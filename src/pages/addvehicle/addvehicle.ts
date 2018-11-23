import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the AddvehiclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addvehicle',
  templateUrl: 'addvehicle.html',
})
export class AddvehiclePage {

  strMake: string;
  strModel: string;
  intYear: number;
  strPlates: string;
  strDoors: string;
  intAvailableSeats: number;
  bAC: boolean;
  bAux: boolean;
  bBT: boolean;
  bCharger: boolean;


  strEmail: string;

  data: Observable<any>;

  strMakes: any;
  strModels: any;



  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: HttpClient) {
    this.fxSetMakes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddvehiclePage');
  }

  fxAlert(strTitle: string, strSubtitle: string) {

    const alert = this.alertCtrl.create({
      title: strTitle,
      subTitle: strSubtitle,
      buttons: ['OK']

    });
    alert.present();

  }




  async fxSetMakes() {

    console.log('set Makes:');
    var url = 'http://192.168.1.70/RAIT/v1/getMakes.php';
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
      console.log('data: ', data);
      //this.navCtrl.push(MainPage);
      if (data.error) {

        this.fxAlert('Error', data.message);
        return;

      } else {
        //this.navCtrl.push(MainPage);
        //this.strfrWhere = data;
        this.strMakes = data.row;

        //console.log(this.strfrWhere);
      }
    },
      error => {
        console.log(error);
        this.fxAlert('Error', error);
        return;
      });



  }



  fxSetModels(strModelFx: string) {

    console.log('set Models: ');
    console.log('modelL ', strModelFx);

    console.log('set Makes:');
    var url = 'http://192.168.1.70/RAIT/v1/getModels.php';
    //var url = 'https://jsonplaceholder.typicode.com/posts/1';

    //strModelFx = 'asd';

    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    //let postData = new FormData();
    //postData.append('email', this.email);
    //postData.append('password', this.password);

    let datos = { 'strModelFx': strModelFx };



    /*let datos = {
       "jsonRaitData": [
         { 'email': this.email, 'password': this.password },
         ]
     }*/

    this.data = this.http.post(url, datos, options);
    this.data.subscribe(data => {
      console.log('data: ', data);
      //this.navCtrl.push(MainPage);
      if (data.error) {

        this.fxAlert('Error', data.message);
        return;

      } else {
        //this.navCtrl.push(MainPage);
        //this.strfrWhere = data;
        this.strModels = data.row;

        //console.log(this.strfrWhere);
      }
    },
      error => {
        console.log(error);
        this.fxAlert('Error', error);
        return;
      });


  }

  fxAddVehicle() {

    console.log('add vehicle fx: ');

    if (this.strMake == '' || this.strMake == undefined || this.strMake.length < 1) {

      this.fxAlert('Error', 'Favor de llenar los campos');
      return;

    } else {

      console.log('aPASSED');

      var url = 'http://192.168.1.70/RAIT/v1/addVehicle.php';

      let options = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };


      /*let datos = {
        'strMake': this.strMake,
        'strModel': this.strModel,
        'intYear': this.intYear,
        'strPlates': this.strPlates,
        'strDoors': this.strDoors,
        'intAvailableSeats': this.intAvailableSeats,
        'bAC': this.bAC,
        'bAux': this.bAux,
        'bBT': this.bBT,
        'bCharger': this.bCharger
        'strEmail': this.strEmail
      };*/

      let datos = {
        'strMake': this.strMake,
        'strModel': this.strModel,
        'intYear': this.intYear,
        'strPlates': this.strPlates,
        'strDoors': this.strDoors,
        'intAvailableSeats': this.intAvailableSeats,
        'bAC': this.bAC,
        'bAux': this.bAux,
        'bBT': this.bBT,
        'bCharger': this.bCharger,
        'strEmail': this.strEmail
            };


      this.data = this.http.post(url, datos, options);
      this.data.subscribe(data => {
        console.log('asdAddVehicle : ', data);
        if (data.error) {

          this.fxAlert('Error', data.message);
          return;

        } else {

          this.fxAlert('Done', data.message);
          this.navCtrl.push(AddvehiclePage);

        }
      },
        error => {
          console.log(error);
          this.fxAlert('Error', error);
          return;
        });

    }

  }




}
