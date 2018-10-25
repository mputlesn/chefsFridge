import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ChefsfridgeProvider } from '../../providers/chefsfridge/chefsfridge';
import { SearchPage } from '../search/search';
import { ResultsPage } from '../results/results';
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
  items
  constructor(public navCtrl: NavController, private chefsFridge: ChefsfridgeProvider, public toastCtrl: ToastController) {
    this.chefsFridge.retrieveUser().then((data) => {
      // this.name = data.name;

      console.log(data);

    })
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    firebase.database().ref('users/' + userId).on('value', (data) => {
      var userA = data.val();
      console.log(userA);

      this.name = userA.name;
    })
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad HomePage');
    

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

  // search(){
  //   var obj={
  //     cat: this.cat,
  //     sub: this.sub
  //   }
  //   this.navCtrl.push(SearchPage, obj);
  // }
}
