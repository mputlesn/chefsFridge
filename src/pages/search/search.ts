import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ChefsfridgeProvider } from '../../providers/chefsfridge/chefsfridge'
import { ConfirmPage } from '../confirm/confirm';
import { PopoverController } from 'ionic-angular';
// import items from '../../interfaces/array';
import cat from '../../interfaces/cat';
import itemArr from '../../interfaces/itemArr';
import { HomePage } from '../home/home';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  topics = [];
  name: string;
  talks = [];
  preparedTags = [
    '#Ionic',
    '#Angular',
    '#Javascript',
    '#Mobile',
    '#Hybrid',
    '#CrossPlatform'
  ]

  temp:any;

  ingred:any;

  addTalk() {
    this.talks.push({name: this.name, topics: this.topics});
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private chefsFridge: ChefsfridgeProvider, public popoverCtrl: PopoverController, public toastCtrl: ToastController) {

   
    
    
  }

  ionViewDidLoad() {
    this.chefsFridge.retreiveRecipeIngred().then((data)=>{
      console.log(data);
      this.ingred = data;
      console.log(this.ingred.length);
      
    })

    for (let i = 0; i < this.ingred.length; i++) {
      for (let x = 0; x < this.ingred[i].length; x++) {
        this.temp = this.ingred[i].split(",");
        console.log(this.temp);
        
      }
      
      
    }

    
    
  }

}

