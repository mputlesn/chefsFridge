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
  recipe = [];
  item: string;
  category = this.navParams.get("cat");
  sub_category = this.navParams.get("sub");
  searchedrecipe = [];
  finalRecipe = [];
  count: number;
  options = cat;
  temp = [];
  tempcount: number = 0;
  cnt: number = 0;
  food = [];
  tempCount: number;
  disIndex: number;
  tempArr = itemArr
  temper = [];
  meat = [
    {
      breakfast: [{
        herbs: [{ img: "../../assets/imgs/meat lover/baking powder.jpg", name: "baking powder", disName: "Baking Powder" }],
        fruits: [{ img: "", name: "", disName: "" }],
        veg: [{ img: "../../assets/imgs/meat lover/scallions.jpg", name: "scallions", disName: "Scallions" }],
        pro: [{ img: "../../assets/imgs/meat lover/flour.jpg", name: "flour", disName: "Flour" }],
        meat: [{ img: "../../assets/imgs/meat lover/ham hock.jpg", name: "ham", disName: "Ham" }]
      }],
      lunch: [{
        herbs: [{ img: "../../assets/icon/banana.png", name: "ground pepper", disName: "GPs" }],
        fruits: [{ img: "../../assets/icon/apple.png", name: "sdfd", disName: "JGJKG" }],
        veg: [{ img: "../../assets/icon/broccoly.jpg", name: "hjkh", disName: "MHJK" }],
        pro: [{ img: "../../assets/icon/eggplant.png", name: "vbn", disName: "HJKH" }],
        meat: [{ img: "../../assets/icon/Ribs.jpg", name: "vb", disName: "HGJKJK" }]
      }],
      dinner: [{
        herbs: [{ img: "../../assets/icon/banana.png", name: "dfdsf", disName: "HDFG" }],
        fruits: [{ img: "../../assets/icon/apple.png", name: "dfgd", disName: "KKJJ" }],
        veg: [{ img: "../../assets/icon/broccoly.jpg", name: "jnh", disName: "BN" }],
        pro: [{ img: "../../assets/icon/eggplant.png", name: "vchb", disName: "HJV" }],
        meat: [{ img: "../../assets/icon/Ribs.jpg", name: "nbvn", disName: "HJB" }]
      }],
      dessert: [{
        herbs: [{ img: "../../assets/icon/banana.png", name: "dgd", disName: "KU" }],
        fruits: [{ img: "../../assets/icon/apple.png", name: "dfgdfg", disName: "KLH" }],
        veg: [{ img: "../../assets/icon/broccoly.jpg", name: "vbnvn", disName: "HJKH" }],
        pro: [{ img: "../../assets/icon/eggplant.png", name: "jklhkl", disName: "KLH" }]
      }],
    }
  ]

  vegan = [
    {
      breakfast: [{
        herbs: [{ img: "../../assets/icon/banana.png", name: "ground pepper", disName: "GP" }],
        fruits: [{ img: "../../assets/icon/apple.png", name: "apple", disName: "ApP" }],
        veg: [{ img: "../../assets/icon/broccoly.jpg", name: "fghfgh", disName: "VGGBV" }],
        pro: [{ img: "../../assets/icon/eggplant.png", name: "", disName: "JKHL" }],
        meat: [{ img: "../../assets/icon/Ribs.jpg", name: "hgfhfdgh", disName: "JKJKJKJKJK" }]
      }],
      lunch: [{
        herbs: [{ img: "../../assets/icon/banana.png", name: "ground pepper", disName: "GPs" }],
        fruits: [{ img: "../../assets/icon/apple.png", name: "sdfd", disName: "JGJKG" }],
        veg: [{ img: "../../assets/icon/broccoly.jpg", name: "hjkh", disName: "MHJK" }],
        pro: [{ img: "../../assets/icon/eggplant.png", name: "vbn", disName: "HJKH" }],
        meat: [{ img: "../../assets/icon/Ribs.jpg", name: "vb", disName: "HGJKJK" }]
      }],
      dinner: [{
        herbs: [{ img: "../../assets/icon/banana.png", name: "dfdsf", disName: "HDFG" }],
        fruits: [{ img: "../../assets/icon/apple.png", name: "dfgd", disName: "KKJJ" }],
        veg: [{ img: "../../assets/icon/broccoly.jpg", name: "jnh", disName: "BN" }],
        pro: [{ img: "../../assets/icon/eggplant.png", name: "vchb", disName: "HJV" }],
        meat: [{ img: "../../assets/icon/Ribs.jpg", name: "nbvn", disName: "HJB" }]
      }],
      dessert: [{
        herbs: [{ img: "../../assets/icon/banana.png", name: "dgd", disName: "KU" }],
        fruits: [{ img: "../../assets/icon/apple.png", name: "dfgdfg", disName: "KLH" }],
        veg: [{ img: "../../assets/icon/broccoly.jpg", name: "vbnvn", disName: "HJKH" }],
        pro: [{ img: "../../assets/icon/eggplant.png", name: "jklhkl", disName: "KLH" }]
      }],
    }
  ]

  veg = [
    {
      breakfast: [{
        herbs: [{ img: "../../assets/icon/banana.png", name: "ground pepper", disName: "GP" }],
        fruits: [{ img: "../../assets/icon/apple.png", name: "apple", disName: "ApP" }],
        veg: [{ img: "../../assets/icon/broccoly.jpg", name: "fghfgh", disName: "VGGBV" }],
        pro: [{ img: "../../assets/icon/eggplant.png", name: "", disName: "JKHL" }],
        meat: [{ img: "../../assets/icon/Ribs.jpg", name: "hgfhfdgh", disName: "JKJKJKJKJK" }]
      }],
      lunch: [{
        herbs: [{ img: "../../assets/icon/banana.png", name: "ground pepper", disName: "GPs" }],
        fruits: [{ img: "../../assets/icon/apple.png", name: "sdfd", disName: "JGJKG" }],
        veg: [{ img: "../../assets/icon/broccoly.jpg", name: "hjkh", disName: "MHJK" }],
        pro: [{ img: "../../assets/icon/eggplant.png", name: "vbn", disName: "HJKH" }],
        meat: [{ img: "../../assets/icon/Ribs.jpg", name: "vb", disName: "HGJKJK" }]
      }],
      dinner: [{
        herbs: [{ img: "../../assets/icon/banana.png", name: "dfdsf", disName: "HDFG" }],
        fruits: [{ img: "../../assets/icon/apple.png", name: "dfgd", disName: "KKJJ" }],
        veg: [{ img: "../../assets/icon/broccoly.jpg", name: "jnh", disName: "BN" }],
        pro: [{ img: "../../assets/icon/eggplant.png", name: "vchb", disName: "HJV" }],
        meat: [{ img: "../../assets/icon/Ribs.jpg", name: "nbvn", disName: "HJB" }]
      }],
      dessert: [{
        herbs: [{ img: "../../assets/icon/banana.png", name: "dgd", disName: "KU" }],
        fruits: [{ img: "../../assets/icon/apple.png", name: "dfgdfg", disName: "KLH" }],
        veg: [{ img: "../../assets/icon/broccoly.jpg", name: "vbnvn", disName: "HJKH" }],
        pro: [{ img: "../../assets/icon/eggplant.png", name: "jklhkl", disName: "KLH" }]
      }],
    }
  ]




  constructor(public navCtrl: NavController, public navParams: NavParams, private chefsFridge: ChefsfridgeProvider, public popoverCtrl: PopoverController, public toastCtrl: ToastController) {
    console.log(this.category);
    console.log(this.sub_category);
  }

  // cancel(index: number,value: string){
  //   if(this.selection[index] != value){
  //     console.log("if")
  //     this.selection[index] = value;
  //   }else{
  //     console.log("else")
  //     this.selection.splice(index, 1);
  //   }
  //   console.log(this.selection);

  //   this.count = this.selection.length;

  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    console.log(this.tempArr);
    this.food = [];
    //this.tempArr[0] = {cat: this.category, sub:this.sub_category}
    // if(this.temper != []){
    //   if(this.tempArr[0].cat != this.category && this.tempArr[0].sub != this.sub_category){
    //     console.log("Not the same");

    //   }
    //   console.log("array has items");
    // }else{
    //   console.log("array empty");
    // }


    this.count = this.food.length;

    console.log(this.category);
    console.log(this.sub_category);
    this.options[0] = {
      cat: this.category,
      sub: this.sub_category
    }
  }

  back() {
    // this.tempArr[0] = {cat: this.category, sub:this.sub_category}
    // this.temper[0] = 1;
    this.navCtrl.popTo(HomePage);
  }

  refresh() {

  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(ConfirmPage, { items: this.food });
    popover.present({
      ev: myEvent
    });
    this.count = this.food.length;

  }

  addItem(name) {
    var dupIndex: number;
    if (this.food.length == 0) {
      console.log("in the first if statement");
      this.food.push(name);
    } else {
      for (let index = 0; index < this.food.length; index++) {
        if (this.food[index] == name) {
          console.log("Duplication found");
          this.tempCount = 1;
          dupIndex = this.food.indexOf(name);
          this.disIndex = this.food.indexOf(name);
          break;
        } else {
          console.log("No duplication");
          this.tempCount = 0;
          this.disIndex = this.food.indexOf(name);
        }

      }
    }

    if (this.tempCount <= 0) {
      this.food.push(name);
      console.log("No duplication so name was added");
      const toast = this.toastCtrl.create({
        message: 'Item added',
        duration: 3000,
        cssClass: 'changeToast1',
        position: 'top'
      });
      toast.present();
    } else {
      console.log("Duplication found at index " + dupIndex);
      const toast = this.toastCtrl.create({
        message: 'Item has already been added',
        duration: 3000,
        cssClass: 'changeToast',
        position: 'top'
      });
      toast.present();
    }

    console.log(this.food);
    this.count = this.food.length
    console.log(this.count);
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

