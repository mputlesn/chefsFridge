import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ChefsfridgeProvider } from '../../providers/chefsfridge/chefsfridge';
import { SearchPage } from '../search/search';
import { ResultsPage } from '../results/results';
import { ConfirmPage } from '../confirm/confirm';
import { PopoverController } from 'ionic-angular';
// import items from '../../interfaces/array';
// import itemArr from '../../interfaces/itemArr';

declare var firebase
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // temp = itemArr
  sub_cat: string;
  category: string;
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
    console.log('ionViewDidLoad HomePage');
    this.chefsFridge.retreiveRecipeIngred().then((data)=>{
      console.log(data);
      this.ingred = data;
      console.log(this.ingred.length);
      
    })

    setTimeout(()=>{
      for (let i = 0; i < this.ingred.length; i++) {
        console.log("first for");
        var a = this.ingred[i]
        for (let x = 0; x < a.length; x++) {
          console.log("first for");
          var b = a[x]
          console.log(b);

          this.temp = b.split(",");
          console.log(this.temp);
            for (let j = 0; j < this.temp.length; j++) {
              const element = this.temp[j];
              var c = element.split(" ")
              for (let k = 0; k < c.length; k++) {
                if(c[k] != ""){
                  this.temp3.push(c[k])
                }
                
                
              }
            }
          
        }
        
      }

      for (let g = 0; g < this.temp3.length; g++) {
        console.log("check");
        
        var first = this.temp3[g];
        var second = this.temp3[g+1];

        console.log(first);
        console.log(second);
      if(first == second){
        // this.IngredDB.push(this.temp3[g]);
        // console.log(this.IngredDB);
        this.temp3.splice(g+1, 1)
        
      }
        
      }
      
      
      this.IngredDB = this.temp3;

    }, 3000)

    

    console.log("out");
    
    

  }

 

  sub(option) {
    this.sub_cat = option;
    console.log(this.sub_cat);
    
  }

  cat(option){
    this.category = option;
    console.log(this.category);
    
  }

  search() {

    var temp1 = []
    var temp2 = this.items.split(",");
    var temp3 = []
    var temp4 = []

    // var str = "Apples are round, and Apples are Juicy."; 
    // console.log(str.toUpperCase( ));

    console.log(temp2);

    for (let index = 0; index < temp2.length; index++) {
      console.log(temp2[index]);

      temp1 = temp2[index].split(" ")
      console.log('second split');
      console.log(temp1);
      for (let i = 0; i < temp1.length; i++) {
        var str = temp1[i].toUpperCase()
        console.log(str);
        if (str != "" && str != "AND") {
          temp3.push(temp1[i])
        }
      }

    }

    console.log("temp3");
    console.log(temp3);

    if(temp3.length < 3){
      const toast = this.toastCtrl.create({
        message: 'Please enter atleast 3 ingredients',
        duration: 3000,
        cssClass: 'changeToast1'
      });
      toast.present();
    }else{
      var obj = {
        cat: this.category,
        sub: this.sub_cat,
        items: temp3
      }
      this.navCtrl.push(ResultsPage, obj)
    }
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(ConfirmPage);
    popover.present({
      ev: myEvent
    });
    // this.count = this.preparedTags.length;

  }

 
}
