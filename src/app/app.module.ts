import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChefsfridgeProvider } from '../providers/chefsfridge/chefsfridge';
import { SignInPage } from '../pages/sign-in/sign-in';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { SearchPage } from '../pages/search/search';
import { ResultsPage } from '../pages/results/results';
import { ViewPage } from '../pages/view/view';
import { ConfirmPage } from '../pages/confirm/confirm';
import { IntroPage } from '../pages/intro/intro';

import {RlTagInputModule} from 'angular2-tag-input';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignInPage,
    SignUpPage,
    SearchPage,
    ResultsPage,
    ViewPage,
    ConfirmPage,
    IntroPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RlTagInputModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignInPage,
    SignUpPage,
    SearchPage,
    ResultsPage,
    ViewPage,
    ConfirmPage,
    IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChefsfridgeProvider
  ]
})
export class AppModule {}
