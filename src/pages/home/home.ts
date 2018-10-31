import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ChefsfridgeProvider } from '../../providers/chefsfridge/chefsfridge';
import { ConfirmPage } from '../confirm/confirm';
import { PopoverController } from 'ionic-angular';

declare var firebase
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  sub_cat: string = "";
  category: string = "";
  name: string;
  items;
  count:number;
  
  itemDis = [];
  IngredDB = []
  temp:any = [];
  temp2:any = [];
  ingred:any = [];
  temp3:any = [];

  constructor(public navCtrl: NavController, private chefsFridge: ChefsfridgeProvider, public toastCtrl: ToastController, public popoverCtrl: PopoverController) {
  
  }

  ionViewDidLoad() {

    this.count = this.itemDis.length;
    console.log(this.itemDis);
    
    console.log('ionViewDidLoad HomePage');
    this.chefsFridge.retreiveRecipeIngred().then((data)=>{
      console.log(data);
      this.ingred = data;
      console.log(this.ingred.length);
    })

  }

  refresh(){
    this.sub_cat = "";
    this.category = "";
    this.itemDis = [];
  }

 

  sub(option) {
    this.sub_cat = option;
    console.log(this.sub_cat);
    
  }

  cat(option){
    this.category = option;
    console.log(this.category);
    
  }

  presentPopover(myEvent) {
    console.log(this.itemDis);
    
    var obj = {
      cat: this.category,
      sub:this.sub_cat,
      items: this.itemDis
    }
    let popover = this.popoverCtrl.create(ConfirmPage, obj);
    popover.present({
      ev: myEvent
    });
    this.count = this.itemDis.length

  }

 
}
