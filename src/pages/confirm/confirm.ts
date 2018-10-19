import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
// import items from '../../interfaces/array';
import { ResultsPage } from '../results/results';
import cat from '../../interfaces/cat';
/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {

  recipe = [];
  item: string;
  searchedrecipe = [];
  finalRecipe = [];
  items = this.navParams.get('items');;
  options = cat

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    console.log("search info");
    console.log(this.options);
    console.log(this.items);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPage');
  }

  delete(i){
    this.items.splice(i, 1);
  }
  search(){
    if(this.items.length>=5){
    
      console.log("search info");
      console.log(this.options);
      console.log(this.items);
      var obj = {
          cat: this.options[0].cat,
          sub: this.options[0].sub,
          item: this.items,
   
      }
      this.navCtrl.push(ResultsPage, obj);
    }
    else{
      const toast = this.toastCtrl.create({
        message: 'Please choose more than 5 ingredients',
        duration: 3000,
        position:"top"
      });
      toast.present();

    }
  }

}
