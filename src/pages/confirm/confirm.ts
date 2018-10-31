import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import { ResultsPage } from '../results/results';
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
  items = this.navParams.get('items');
  cat = this.navParams.get('cat');
  sub = this.navParams.get('sub');
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    console.log("search info");
    console.log(this.items);
    console.log(this.sub);
    console.log(this.cat);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPage');
  }

  delete(i){
    this.items.splice(i, 1);
  }
  search(){
    if(this.items.length>=3){
    
      console.log("search info");
      console.log(this.items);
      var obj = {
          cat: this.cat,
          sub: this.sub,
          items: this.items,
   
      }
      this.navCtrl.push(ResultsPage, obj);
    }
    else{
      const toast = this.toastCtrl.create({
        message: 'Please choose atleast 3 ingredients',
        duration: 3000
      });
      toast.present();

    }
  }

}
