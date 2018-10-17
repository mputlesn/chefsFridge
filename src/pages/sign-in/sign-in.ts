import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { user } from '../../interfaces/user';
import { HomePage } from '../home/home';
import { SignUpPage } from '../../pages/sign-up/sign-up';
import { ChefsfridgeProvider } from '../../providers/chefsfridge/chefsfridge'

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})

// @IonicPage()
// @Component({
//   selector: 'page-sign-in',
//   templateUrl: 'sign-in.html',
// })
export class SignInPage {

  user = {} as user;

  constructor(public navCtrl: NavController, public navParams: NavParams, private chefsFridge: ChefsfridgeProvider,  private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  userCreateAccount(){
    this.navCtrl.push(SignUpPage)
  }

  userSignIn(user: user){

    if(user.email !=undefined && user.password){

      this.chefsFridge.signIn(user.email, user.password).then(()=> {
        this.navCtrl.setRoot(HomePage);
      } , (error)=>{
        let toast = this.toastCtrl.create({
          message: 'User was added successfully',
          duration: 3000
        });
        toast.present();
      })
    }else{
      const toast = this.toastCtrl.create({
        message: 'Please fill in all the fields',
        duration: 3000
      });
      toast.present();

    }
    
    
    
  }

  userResetPassword(){
    this.chefsFridge.userResetPassword();
  }
}
