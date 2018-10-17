//nokwe
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {ChefsfridgeProvider } from '../../providers/chefsfridge/chefsfridge';
import { user } from '../../interfaces/user';
import { SignInPage } from '../sign-in/sign-in';
import { HomePage } from '../home/home';


declare var firebase;
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  user = {} as user;
  constructor(public navCtrl: NavController, public navParams: NavParams, private chefsFridge: ChefsfridgeProvider, public toastCtrl: ToastController) {
  }
  ionViewDidLoad() {
    firebase.auth()
    console.log('ionViewDidLoad SignUpPage');
  
  }
  signUp(user:user){
    if(user.email !=undefined && user.password && user.name!=undefined && user.surname !=undefined){
    this.chefsFridge.SignUp(user.email, user.password, user.name, user.surname).then(()=>{
     
      
      this.navCtrl.push(HomePage);

    })
   
    }else{
      const toast = this.toastCtrl.create({
        message: 'Please fill in all the fields',
        duration: 3000
      });
      toast.present();

    }
    
  
  }
  backToSignInPage(){
    this.navCtrl.push(SignInPage)
  }
  
}



//import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { ChefsfridgeProvider } from '../../providers/chefsfridge/chefsfridge';
// import { user } from '../../interfaces/user';
// /**
//  * Generated class for the SignUpPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-sign-up',
//   templateUrl: 'sign-up.html',
// })
// export class SignUpPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad SignUpPage');
//   }

  
  
// }
