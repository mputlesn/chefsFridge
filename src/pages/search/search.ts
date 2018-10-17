import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChefsfridgeProvider } from '../../providers/chefsfridge/chefsfridge'
import { ConfirmPage } from '../confirm/confirm';
import { PopoverController } from 'ionic-angular';
import items from '../../interfaces/array';
import cat from '../../interfaces/cat';
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
  selection = [] = items;
  recipe = [];
  item: string;
  category = this.navParams.get("cat");
  sub_category = this.navParams.get("sub");
  searchedrecipe = [];
  finalRecipe = [];
  count:number;
  options = cat;
  
  meat = [
    {
      breakfast:[{
        herbs:[{img:"../../assets/imgs/meat lover/baking powder.jpg", name:"baking powder", disName:"Baking Powder"}],
        fruits:[{img:"", name:"", disName:""}],
        veg:[{img:"../../assets/imgs/meat lover/scallions.jpg", name:"scallions", disName:"Scallions"}],
        pro:[{img:"../../assets/imgs/meat lover/flour.jpg", name:"flour", disName:"Flour"}],
        meat:[{img:"../../assets/imgs/meat lover/ham hock.jpg", name:"ham", disName:"Ham"}]
      }],
      lunch: [{
       herbs:[{img:"../../assets/icon/banana.png", name:"ground pepper", disName:"GPs"}],
       fruits:[{img:"../../assets/icon/apple.png", name:"sdfd", disName:"JGJKG"}],
       veg:[{img:"../../assets/icon/broccoly.jpg", name:"hjkh", disName:"MHJK"}],
       pro:[{img:"../../assets/icon/eggplant.png", name:"vbn", disName:"HJKH"}],
       meat:[{img:"../../assets/icon/Ribs.jpg", name:"vb", disName:"HGJKJK"}]
     }],
     dinner:[{
       herbs:[{img:"../../assets/icon/banana.png", name:"dfdsf", disName:"HDFG"}],
       fruits:[{img:"../../assets/icon/apple.png", name:"dfgd", disName:"KKJJ"}],
       veg:[{img:"../../assets/icon/broccoly.jpg", name:"jnh", disName:"BN"}],
       pro:[{img:"../../assets/icon/eggplant.png", name:"vchb", disName:"HJV"}],
       meat:[{img:"../../assets/icon/Ribs.jpg", name:"nbvn", disName:"HJB"}]
     }],
     dessert:[{
       herbs:[{img:"../../assets/icon/banana.png", name:"dgd", disName:"KU"}],
       fruits:[{img:"../../assets/icon/apple.png", name:"dfgdfg", disName:"KLH"}],
       veg:[{img:"../../assets/icon/broccoly.jpg", name:"vbnvn", disName:"HJKH"}],
       pro:[{img:"../../assets/icon/eggplant.png", name:"jklhkl", disName:"KLH"}]
     }],
    }
  ]

  vegan = [
    {
      breakfast:[{
        herbs:[{img:"../../assets/icon/banana.png", name:"ground pepper", disName:"GP"}],
        fruits:[{img:"../../assets/icon/apple.png", name:"apple", disName:"ApP"}],
        veg:[{img:"../../assets/icon/broccoly.jpg", name:"fghfgh", disName:"VGGBV"}],
        pro:[{img:"../../assets/icon/eggplant.png", name:"", disName:"JKHL"}],
        meat:[{img:"../../assets/icon/Ribs.jpg", name:"hgfhfdgh", disName:"JKJKJKJKJK"}]
      }],
      lunch: [{
       herbs:[{img:"../../assets/icon/banana.png", name:"ground pepper", disName:"GPs"}],
       fruits:[{img:"../../assets/icon/apple.png", name:"sdfd", disName:"JGJKG"}],
       veg:[{img:"../../assets/icon/broccoly.jpg", name:"hjkh", disName:"MHJK"}],
       pro:[{img:"../../assets/icon/eggplant.png", name:"vbn", disName:"HJKH"}],
       meat:[{img:"../../assets/icon/Ribs.jpg", name:"vb", disName:"HGJKJK"}]
     }],
     dinner:[{
       herbs:[{img:"../../assets/icon/banana.png", name:"dfdsf", disName:"HDFG"}],
       fruits:[{img:"../../assets/icon/apple.png", name:"dfgd", disName:"KKJJ"}],
       veg:[{img:"../../assets/icon/broccoly.jpg", name:"jnh", disName:"BN"}],
       pro:[{img:"../../assets/icon/eggplant.png", name:"vchb", disName:"HJV"}],
       meat:[{img:"../../assets/icon/Ribs.jpg", name:"nbvn", disName:"HJB"}]
     }],
     dessert:[{
       herbs:[{img:"../../assets/icon/banana.png", name:"dgd", disName:"KU"}],
       fruits:[{img:"../../assets/icon/apple.png", name:"dfgdfg", disName:"KLH"}],
       veg:[{img:"../../assets/icon/broccoly.jpg", name:"vbnvn", disName:"HJKH"}],
       pro:[{img:"../../assets/icon/eggplant.png", name:"jklhkl", disName:"KLH"}]
     }],
    }
  ]

  veg = [
    {
      breakfast:[{
        herbs:[{img:"../../assets/icon/banana.png", name:"ground pepper", disName:"GP"}],
        fruits:[{img:"../../assets/icon/apple.png", name:"apple", disName:"ApP"}],
        veg:[{img:"../../assets/icon/broccoly.jpg", name:"fghfgh", disName:"VGGBV"}],
        pro:[{img:"../../assets/icon/eggplant.png", name:"", disName:"JKHL"}],
        meat:[{img:"../../assets/icon/Ribs.jpg", name:"hgfhfdgh", disName:"JKJKJKJKJK"}]
      }],
      lunch: [{
       herbs:[{img:"../../assets/icon/banana.png", name:"ground pepper", disName:"GPs"}],
       fruits:[{img:"../../assets/icon/apple.png", name:"sdfd", disName:"JGJKG"}],
       veg:[{img:"../../assets/icon/broccoly.jpg", name:"hjkh", disName:"MHJK"}],
       pro:[{img:"../../assets/icon/eggplant.png", name:"vbn", disName:"HJKH"}],
       meat:[{img:"../../assets/icon/Ribs.jpg", name:"vb", disName:"HGJKJK"}]
     }],
     dinner:[{
       herbs:[{img:"../../assets/icon/banana.png", name:"dfdsf", disName:"HDFG"}],
       fruits:[{img:"../../assets/icon/apple.png", name:"dfgd", disName:"KKJJ"}],
       veg:[{img:"../../assets/icon/broccoly.jpg", name:"jnh", disName:"BN"}],
       pro:[{img:"../../assets/icon/eggplant.png", name:"vchb", disName:"HJV"}],
       meat:[{img:"../../assets/icon/Ribs.jpg", name:"nbvn", disName:"HJB"}]
     }],
     dessert:[{
       herbs:[{img:"../../assets/icon/banana.png", name:"dgd", disName:"KU"}],
       fruits:[{img:"../../assets/icon/apple.png", name:"dfgdfg", disName:"KLH"}],
       veg:[{img:"../../assets/icon/broccoly.jpg", name:"vbnvn", disName:"HJKH"}],
       pro:[{img:"../../assets/icon/eggplant.png", name:"jklhkl", disName:"KLH"}]
     }],
    }
  ]


 

  constructor(public navCtrl: NavController, public navParams: NavParams, private chefsFridge: ChefsfridgeProvider, public popoverCtrl: PopoverController) {
    console.log(this.category);
    console.log();
    
    for (let index = 0; index < this.meat.length; index++) {
      for (let i = 0; i < this.meat[index].breakfast.length; i++) {
        for (let j = 0; j < this.meat[index].breakfast[i].herbs.length; j++) {
          const element = this.meat[index].breakfast[i].herbs[j];
          console.log(element);
          
        }
      }
      
    }
    // console.log(this.meat[0].Breakfast[0].image);
    console.log(this.sub_category);
    
  }

  cancel(index: number,value: string){
    if(this.selection[index] != value){
      console.log("if")
      this.selection[index] = value;
    }else{
      console.log("else")
      this.selection.splice(index, 1);
    }
    console.log(this.selection);
    
    this.count = this.selection.length;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.count = this.selection.length;
    this.options[0] = {
      cat: this.category,
      sub: this.sub_category
    }
  }

  back(){
    this.navCtrl.pop();
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(ConfirmPage);
    popover.present({
      ev: myEvent
    });
    this.count = this.selection.length;

  }

  // color = ['light','light','light'];
  
  // clickMe(a){
  //   if ( this.color[a] == 'danger'){
  //     this.color[a] = 'light';
  //   }
  //   else{
  //     this.color[a] = 'danger'
  //   }
  }

