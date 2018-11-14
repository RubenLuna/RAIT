import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { Register3Page } from '../register3/register3';

/**
 * Generated class for the Register2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register2',
  templateUrl: 'register2.html',
})
export class Register2Page {


  strName: string;
  strLastName: string;

  strMonth: string;
  strYear: string;
  bOffers: boolean;
  jsonData: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

    this.strName = navParams.get('strName');
    this.strLastName = navParams.get('strLastName');
    this.bOffers = navParams.get('bOffers');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register2Page');
  }


  fxRegister2() {

    this.strMonth = document.getElementById('strMyMonth').innerText;

    //alert(asd);


    console.log("Name " + this.strName);
    console.log("Last Name " + this.strLastName);
    console.log("Month " + this.strMonth);
    console.log("Year " + this.strYear);
    console.log("Offers " + this.bOffers);

    //let jsonData: string = JSON.stringify(this.strName, this.strLastName);


    if (this.strName == '' || this.strLastName == '' || this.strName == undefined || this.strLastName == undefined
      || this.strName.length < 2 || this.strLastName.length < 2
      || this.strMonth == '' || this.strYear == '' || this.strMonth == undefined || this.strYear == undefined
      || this.strMonth.length < 2 || this.strYear.length < 2) {
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Favor de llenar los campos',
        buttons: ['OK']
      });
      alert.present();

      return;
    }

    this.jsonData = JSON.stringify({ strName: this.strName, strLastName: this.strLastName });

    console.log("jsonData: " + this.jsonData);



    this.navCtrl.push(Register3Page, {
      strName: this.strName,
      strLastName: this.strLastName,
      strMonth: this.strMonth,
      strYear: this.strYear,
      bOffers: this.bOffers,
      jsonData: this.jsonData
    });





  }

}
