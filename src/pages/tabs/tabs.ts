import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProfileUpdatePage } from '../user-profile-update/user-profile-update';
import { SelectStagePage } from '../select-stage/select-stage';
import { ChatPage } from '../chat/chat';
import { SigninPage } from '../signin/signin';
import { AngularFireAuth } from '@angular/fire/auth';
import * as  firebase from 'firebase/app';
import { Observable } from 'rxjs';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {

  tab1 = SelectStagePage;
  tab2
  tab3


   user: firebase.User


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public afAuth: AngularFireAuth) {


    afAuth.authState.subscribe(user => {
     this.user = user
    })

    this.afAuth.authState.subscribe(
      user => {

        if (user) {
          this.tab2 = UserProfileUpdatePage;
         this.tab3 = ChatPage;
       }

       else {
          this.tab2 = SigninPage;
         this.tab3 = SigninPage;
        }

     }

    )
    


  }



  

    
  






  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}

