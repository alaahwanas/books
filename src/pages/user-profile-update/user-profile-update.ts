import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { SigninPage } from '../signin/signin';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the UserProfileUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile-update',
  templateUrl: 'user-profile-update.html',
})
export class UserProfileUpdatePage {

 
  user = {
    userName: '',
    userAge: '',
    userProvince: '',

  }

  userList: AngularFireList<any>;

  myUid: any
  itemArray = []
  myEmail: any

  constructor(public navCtrl: NavController,
    public afAuth: AngularFireAuth,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public userServiceProvider: UserServiceProvider,
    public authServiceProvider: AuthServiceProvider) {

    //this.user = db.list('/Users').valueChanges();

    
    this.userList = db.list('/Users')
    this.userList.snapshotChanges()
      .subscribe(actions => {
        actions.forEach(action => {
          let y = action.payload.toJSON()
          y['$key'] = action.key
          this.itemArray.push(y as userItemClass)
        })
        console.log(this.itemArray)

      })



    this.myUid = localStorage.getItem('uid')
    this.myEmail = localStorage.getItem('email')

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfileUpdatePage');

  }

  logout() {


    this.navCtrl.setRoot(SigninPage)
      this.authServiceProvider.signOut();
    
    
      
    
    
   }

 


  
  editForm( $key ) {
    for (let value of this.itemArray)
      if (value['$key'] == $key) {
        console.log(value['$key'])
        this.user.userName = value['name'];
        this.user.userAge = value['age'];
        this.user.userProvince = value['province'];
      }
  }

  onEdit( $key ) {
     this.user.userName,
     this.user.userAge,
     this.user.userProvince,

    this.userList.set( $key, {
  
       name: this.user.userName,
       age: this.user.userAge,
       province: this.user.userProvince,
       email: this.myEmail,
       uid: this.myUid
     })

    this.navCtrl.push(UserProfileUpdatePage);
    
  }

  


}

export class userItemClass{

  $key: string;
  name: string;
  age: string;
  province: string;






}
