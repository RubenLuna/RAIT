import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Register2Page } from '../register2/register2';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


  strName: string;
  strLastName: string;
  bOffers: boolean;
  strEmail: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  fxRegister() {


    /*console.log("Name " + this.strName);
    console.log("Last Name " + this.strLastName);
    */

    if (!this.bOffers || this.bOffers == undefined) {
      this.bOffers = false;
    } else {
      this.bOffers = true;
    }

    //console.log("Checked " + this.bOffers);


    if (this.strName == '' || this.strLastName == '' || this.strName == undefined || this.strLastName == undefined
      || this.strName.length < 2 || this.strLastName.length < 2
      || this.strEmail == undefined
      || this.strEmail.length < 2) {
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Favor de llenar los campos',
        buttons: ['OK']
      });
      alert.present();

      return;
    }

    console.log("Email " + this.strEmail);

    this.navCtrl.push(Register2Page, {
      strName: this.strName,
      strLastName: this.strLastName,
      bOffers: this.bOffers,
      strEmail: this.strEmail
    });





  }

}
