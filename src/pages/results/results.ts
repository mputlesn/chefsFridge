import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { user } from '../../interfaces/user';
import { ChefsfridgeProvider } from '../../providers/chefsfridge/chefsfridge';
import { ViewPage } from '../view/view';
import { SearchPage } from '../search/search';
import itemArr from '../../interfaces/itemArr';
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
  arr = itemArr;

  constructor(public navCtrl: NavController, public navParams: NavParams, private chefsFridge: ChefsfridgeProvider, public loadingCtrl: LoadingController) {
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
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  view(key){
    this.navCtrl.push(ViewPage, {key:key});
   }

   back(){
    var obj={
        cat: this.arr[0].cat,
        sub: this.arr[0].sub
     }
     this.navCtrl.push(SearchPage, obj);
   }

}
