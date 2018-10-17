import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChefsfridgeProvider } from '../../providers/chefsfridge/chefsfridge';
import { SearchPage } from '../search/search';

declare var firebase
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cat:string = "";
  sub:string;
  name: string;
;
  constructor(public navCtrl: NavController, private chefsFridge: ChefsfridgeProvider) {
    this.chefsFridge.retrieveUser().then((data)=>{
      // this.name = data.name;

      console.log(data);
      
    })
    var user = firebase.auth().currentUser;
  var userId = user.uid;
  firebase.database().ref('users/' + userId).on('value',(data)=>{
    var userA = data.val();
    console.log(userA);

    this.name = userA.name;
  })
  }

  sub_cat(option){
    this.sub = option;
  }

  search(){
    var obj={
      cat: this.cat,
      sub: this.sub
    }
    this.navCtrl.push(SearchPage, obj);
  }
}
