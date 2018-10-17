import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChefsfridgeProvider } from '../providers/chefsfridge/chefsfridge';
import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/sign-in/sign-in';
import {  } from '../pages/sign-up/sign-up'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, chefsFridge: ChefsfridgeProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    chefsFridge.checkstate().then((data:any)=>{

      if (data == "yes"){
        this.rootPage = HomePage;
 
      }
      else {
        this.rootPage = SignInPage
      }
     })
  }
}

