import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ChefsfridgeProvider } from '../../providers/chefsfridge/chefsfridge';
import { ViewPage } from '../view/view';
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
  items = this.navParams.get("items");
  recipes: any = [];
  arr = itemArr;
  a: string;
  b: string;
  c: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private chefsFridge: ChefsfridgeProvider, public loadingCtrl: LoadingController) {
    console.log(this.category);
    console.log(this.sub);
    console.log(this.items);
    this.chefsFridge.itemSearch(this.category, this.sub, this.items).then((data)=>{
      this.recipes = data;
      console.log(this.recipes);
      if (this.recipes == []) {
        this.a = " Oops! Sorry...";
        this.b = "There are no recipes with your ingredients";
        this.c = "Please try again...";
      }
      
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
     this.navCtrl.pop();
   }

}
