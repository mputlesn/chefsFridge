import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChefsfridgeProvider } from '../../providers/chefsfridge/chefsfridge';
/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  key = this.navParams.get("key");
  recipe: any = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private chefsFridge: ChefsfridgeProvider) {
    chefsFridge.retrieveARecipe(this.key).then((data)=>{
      this.recipe =data
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }

  back(){
    this.navCtrl.pop();
  }

}
