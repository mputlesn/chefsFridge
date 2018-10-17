import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, LoadingController, AlertController} from 'ionic-angular';
import { user } from '../../interfaces/user';

declare var firebase;
var auth = firebase.auth();

/*
  Generated class for the ChefsfridgeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChefsfridgeProvider {

  user = {} as user ;
  url:any;
  recipe = [];
  userRecipe = [];
  userID:any;
  name: string;
  surname: string;
  Bio: string;
  arrupdate = [];
  condition: string;
  recipeObj:any;

  constructor(public http: HttpClient, public loadingCtrl: LoadingController, public toastCtrl: ToastController,public alertCtrl: AlertController) {
    console.log('Hello ChefsfridgeProvider Provider');
  }

  signIn(email,password){
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
        this.userID = firebase.auth().currentUser.uid;
        resolve() ;
        const loader = this.loadingCtrl.create({
        content:"please wait",
        duration:1000
        });
        loader.present();
       }, (error)=>{
        const toast = this.toastCtrl.create({
          message: error,
          duration: 3000
        });
        toast.present();
      })
    })

   }

  //  profile(id:string){

  //    return id = firebase.auth().currentUser.uid;
  //    firebase.auth().onAuthStateChanged(user => {

  //    })
     

  //  }

   SignUp(email ,password ,name ,surname){
    return new Promise((resolve,reject) => {
      //Create a user account with the email and password
      firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
        //add the default image for the user profile
        // firebase.storage().ref().child('default profile.png').getDownloadURL().then((url)=>{
        //   this.url = url;
        // })
        //signing the user in
        firebase.auth().signInWithEmailAndPassword(email , password).then(()=>{
          var uid = firebase.auth().currentUser.uid;
          //setting user info in the database
          firebase.database().ref('users/'+uid).set({
            name: name,
            surname: surname,
            email:email,
            url: 'http://www.dealnetcapital.com/files/2014/10/blank-profile.png'
          })
          const toast = this.toastCtrl.create({
            message: "Account Created",
            duration: 3000
          });
          toast.present();
        }, (error)=>{
          console.log(error);
          })
          resolve();
      }, (error)=>{
        const toast = this.toastCtrl.create({
          message: error,
          duration: 3000
        });
        toast.present();
      })
      });
  }

  userResetPassword(){
    const prompt = this.alertCtrl.create({
      title: 'Reset password',
      message: "Please enter your email below...",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email address'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Reset',
          handler: data => {
            console.log('email address is ' + data.email);
            this.resetPassword(data.email);
          }
        }
      ]
    });
    prompt.present();
  
  }

  resetPassword(email : any){
    auth.sendPasswordResetEmail(email).then(function() {
     
    }).catch(function(error) {
      // An error happened.
    });
  } 

  retrieveARecipe(key){
    return new Promise((resolve, reject) => {
      firebase.database().ref('recipes/'+key).on('value',(data)=>{
        this.recipeObj = data.val();
          console.log(this.recipeObj);
          resolve(this.recipeObj);
      })
      ;})
  }

  userLogOut(){
    return new Promise((resolve, reject) => {
      firebase.auth().signOut()
      resolve();
    })
  }

  retreiveRecipe(){
    return new Promise((resolve, reject) => {
      firebase.database().ref('recipes/').on('value',(data)=>{
        var recipes = data.val();
        var keys = Object.keys(recipes)
  
        for(var i = 0; i < keys.length; i++){
          var k = keys[i];
         // console.log(keys[i]);
          
          var name = recipes[k].name;
          var description = recipes[k].description
          var category = recipes[k].category
          var sub_category = recipes[k].sub_category
          var ingredients = recipes[k].ingredients
          var methods = recipes[k].directions
          var image = recipes[k].image 
          var likes = recipes[k].likes
          var time = recipes[k].time
          var serve = recipes[k].serve
  
          let obj = {
            key: k,
            name: name,
            description: description,
            category: category,
            sub_category: sub_category,
            ingredients: ingredients,
            methods: methods,
            image: image,
            likes: likes,
            time: time,
            serve: serve
          }
    
          
          this.userRecipe.push(obj);
          resolve(this.userRecipe);
          
        }
       
    })
    })
    
  }

  itemSearch(category, sub_category, items:any){
    
    return new Promise((resolve, reject) => {
      var  commonRecipes = [];
      var ingredients = [];
      var temp = [];
      var temp2 = [];
      var temp3 = [];
      var count = 0;
      var searchedrecipe = [];
      
      firebase.database().ref('recipes/').on('value',(data)=>{
        var recipes = data.val();
        var keys = Object.keys(recipes);
        for(var i = 0; i < keys.length; i++){
          var k = keys[i];
          // console.log(k);
          if(recipes[k].category == category && recipes[k].sub_category == sub_category){
            
          var name = recipes[k].name;
          var description = recipes[k].description
          var ingredients = recipes[k].ingredients
          var methods = recipes[k].directions
          var image = recipes[k].image 
          var likes = recipes[k].likes
          var time = recipes[k].time
          var serve = recipes[k].serve
  
          let obj = {
            key: k,
            name: name,
            description: description,
            ingredients: ingredients,
            methods: methods,
            image: image,
            likes: likes,
            time: time,
            serve: serve
          }
            commonRecipes.push(obj);
            console.log(commonRecipes);
          }
        }
      });

      setTimeout(() => {
        console.log("new recipe");
        for (let i = 0; i < commonRecipes.length; i++){
         ingredients = commonRecipes[i].ingredients;
         console.log(ingredients);
         count = 0;
         console.log("Refreash "+count);
         for (let b = 0; b < ingredients.length; b++) {
           const element = ingredients[b];
           console.log(element);
           temp = element.split(",");
           console.log(temp);
           for (let c = 0; c < temp.length; c++) {
            temp2 = temp[c].split(" ");
            console.log(temp2);
            for (let e = 0; e < temp2.length; e++) {
              for (let j = 0; j < items.length; j++) {
                temp3 = items[j].split(" ");
                for (let k = 0; k < temp3.length; k++) {
                  if(temp3[k] == temp2[e]){
                    count += 1;
                    console.log("Count "+count);
                    console.log('item found');
                    if(count <= 1){
                          console.log("New search");
                          searchedrecipe.push(commonRecipes[i]);
                          console.log(searchedrecipe);
                        }
                  }
     
                }
               }
             }
           }
         }
       }
      }, 3000)
   
    resolve(searchedrecipe);
    });
  }
 
 

  retrieveUser(){
    return new Promise((resolve, reject) => {
      var user = firebase.auth().currentUser;
      var userId = user.uid;
      firebase.database().ref('users/' + userId).on('value',(data)=>{
        var userA = data.val();
        console.log(userA);
        
       // resolve(userA);
       
    })
    })
      
  }
//update
updateProfile(name, surname, bio){

  var database = firebase.database();
  var userid = firebase.auth().currentUser.uid;
  if(name != "" && surname != "" && bio != ""){
        // database.ref('users/'+this.userID).update({name: name,surname:surname});
        var update = {
          name: name,
          surname: surname,
          bio: bio
        }
        return firebase.database().ref('users/' + userid).update(update);
    
  }else 
  if(name == ""){
      if(bio != "" && surname != ""){
        var updates = {
          surname: surname,
          bio: bio
        }
        return firebase.database().ref('users/' + userid).update(updates);
      }else
      if(bio == ""){
        var updatess = {
          surname: surname
        }
        return firebase.database().ref('users/' + userid).update(updatess);
      }else
      if(surname == ""){
        var updatesss = {
          bio: bio
        }
        return firebase.database().ref('users/' + userid).update(updatesss);
      }
  }else 
  if(surname == ""){
    if(bio != "" && name != ""){
      var obj = {
        name: name,
        bio: bio
      }
      return firebase.database().ref('users/' + userid).update(obj);
    }else
    if(bio == ""){
      var objs = {
        name: name
      }
      return firebase.database().ref('users/' + userid).update(objs);
    }else
    if(name == ""){
      var objss = {
        bio: bio
      }
      return firebase.database().ref('users/' + userid).update(objss);
    }
  }else if(bio == ""){
    if(surname != "" && name != ""){
      var obj2 = {
        name: name,
        surname: surname
      }
      return firebase.database().ref('users/' + userid).update(obj2);
    }else
    if(surname == ""){
      var obj2s = {
        name: name
      }
      return firebase.database().ref('users/' + userid).update(obj2s);
    }else
    if(name == ""){
      var obj2ss = {
        surname: surname
      }
      return firebase.database().ref('users/' + userid).update(obj2ss);
    }
  }
    
    


//   if(name != "" && surname != "" && bio != ""){
//     // database.ref('users/'+this.userID).update({name: name,surname:surname});
//     var update = {
//       name: name,
//       surname: surname,
//       bio: bio
//     }
//     return firebase.database().ref('users/' + userid).update(update);

//   } else if (name != "") {
//     var updates = {
//       name: name,
//     }
//     return firebase.database().ref('users/' + userid).update(updates);
    

// }else if (surname != "") {
//     var updatess = {

//       surname: surname
//     }
//     return firebase.database().ref('users/' + userid).update(updatess);

//   }else if (bio != "") {
//     var updatesss = {
//       bio: bio,
//     }
//     return firebase.database().ref('users/' + userid).update(updatesss);

//   }else if (bio != "" && name != "") {
//     var updated= {
//       bio: bio,
//       name:name
//     }
//     return firebase.database().ref('users/' + userid).update( updated);

//   } else if (bio != "" && surname != "") {
//     var updatedd= {
//       bio: bio,
//       surname:surname
//     }
//     return firebase.database().ref('users/' + userid).update( updatedd);

//   }else if (name != "" && surname != "") {
//     var updateddd= {
//       name: name,
//       surname:surname
//     }
//     return firebase.database().ref('users/' + userid).update( updateddd);

//   }
 }


 addRecipe(recipe, uploadTask, ingredients, methods){
  return new Promise((resolve, reject) => {
    var msg;
    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
      console.log("File available at", downloadURL);

      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log("User has sign in");
          let userID = firebase.auth().currentUser.uid;
          let obj = {
            url: downloadURL
          };
          firebase.database().ref('recipes/').push({
            category: recipe.category,
            sub_category: recipe.sub_category,
            name: recipe.name,
            image: downloadURL,
            ingredients: ingredients,
            directions: methods,
            userID: userID,
            serve: recipe.serve,
            time: recipe.time
          },(error)=>{
            if (error) {
              // The write failed...
              msg = error+" please try uploading again...";
              console.log(error+" please try uploading again...");
              
            } else {
              // Data saved successfully!
              msg = "Your Recipe was uploaded successfully...";
              console.log("Your Recipe was uploaded successfully...");
              
            }
          })
          console.log(userID);
        } else {
          console.log("User has not sign in");
        }
      });
    });
    
    resolve(msg)},)
  
}

  retrieveUserRecipe(){
    return new Promise((resolve, reject) => {
      var userid = firebase.auth().currentUser.uid;
      firebase.database().ref('recipes/').on('value',(data)=>{
        var recipes = data.val();
        var keys = Object.keys(recipes)
        console.log(keys);
        this.recipe = [];
         for(var i = 0; i < keys.length; i++){
          var k = keys[i];
          var user = recipes[k].userID
          console.log(user);
            if(userid == user){
              var name = recipes[k].name;
              var description = recipes[k].description
              var category = recipes[k].category
              var sub_category = recipes[k].sub_category
              var ingredients = recipes[k].ingredients
              var methods = recipes[k].directions
              var image = recipes[k].image 
              var likes = recipes[k].likes
              
              let obj = {
                key: k,
                name: name,
                description: description,
                category: category,
                sub_category: sub_category,
                ingredients: ingredients,
                methods: methods,
                image: image,
                likes: likes
              }

              this.recipe.push(obj);
            }
        
          resolve(this.recipe);
        }
    })
    })
  }

  checkstate(){
    return new Promise((resolve, reject)=>{
    firebase.auth().onAuthStateChanged((user)=>{
      if(user != null){
       //user signed in
       this.condition = "yes"
      } else {
        //no user signed in
        this.condition = "no"
      }
      resolve(this.condition)
    })
 
  })
  }

}
