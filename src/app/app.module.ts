import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { Register2Page } from '../pages/register2/register2';
import { Register3Page } from '../pages/register3/register3';
import { MainPage } from '../pages/main/main';
import { GiveridePage } from '../pages/giveride/giveride';
import { FindridePage } from '../pages/findride/findride';

import { HttpClientModule } from '@angular/common/http';
import { GoogleMapComponent } from '../components/google-map/google-map';
import { Geolocation } from '@ionic-native/geolocation';
import { TestPage } from '../pages/test/test';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    Register2Page,
    Register3Page,
    MainPage,
    GoogleMapComponent,
    FindridePage,
    GiveridePage,
    TestPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,
      {
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
    monthShortNames: ['janeiro', 'fevereiro', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre' ],
    dayNames: ['janeiro', 'fevereiro', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    dayShortNames: ['janeiro', 'fevereiro', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    Register2Page,
    Register3Page,
    MainPage,
    FindridePage,
    GiveridePage,
    TestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
