import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { user } from '../../interfaces/user';
import { ChefsfridgeProvider } from '../../providers/chefsfridge/chefsfridge';
import { ViewPage } from '../view/view';
/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  category: string = this.navParams.get("cat");
  sub: string = this.navParams.get("sub");
  items : any = this.navParams.get("item");
  recipes: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private chefsFridge: ChefsfridgeProvider) {
    console.log(this.category);
    console.log(this.sub);
    console.log(this.items);
    this.chefsFridge.itemSearch(this.category, this.sub, this.items).then((data)=>{
      this.recipes = data;
      console.log(this.recipes);

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

  view(key){
    this.navCtrl.push(ViewPage, {key:key});
   }

}
