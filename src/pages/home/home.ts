import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
//import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { RegisterPage } from '../register/register';
import { MainPage } from '../main/main';
import { Observable } from 'rxjs/Observable';
import { TestPage } from '../test/test';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string;
  password: string;

  data: Observable<any>;



  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public http: HttpClient) {

  }

  fxAlert(strTitle: string, strSubtitle: string) {

    const alert = this.alertCtrl.create({
      title: strTitle,
      subTitle: strSubtitle,
      buttons: ['OK']

    });
    alert.present();

  }

  fxLogin() {


    if (this.email == '' || this.password == '' || this.email == undefined || this.password == undefined
      || this.email.length < 2 || this.password.length < 2) {
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Favor de llenar los campos',
        buttons: ['OK']
      });
      alert.present();

      return;
    }

    console.log("Username: ", this.email);
    console.log("Password: ", this.password);

    //var url = 'http://192.168.1.70/AguaOcho/v1/test.php';
    var url = 'http://192.168.1.70/RAIT/v1/loginUser.php';
    //var url = 'https://jsonplaceholder.typicode.com/posts/1';



    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    //let postData = new FormData();
    //postData.append('email', this.email);
    //postData.append('password', this.password);

    let datos = { 'email': this.email, 'password': this.password };



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

      }else{
        this.navCtrl.push(TestPage);
      }
    },
      error => {
        console.log(error);
        this.fxAlert('Error', error);
        return;
      });



  }

  fxGoRegister() {

    this.navCtrl.push(RegisterPage);

  }

  fxGoTestMap() {

    //<google-map></google-map>


    this.navCtrl.push(TestPage);

  }

}
