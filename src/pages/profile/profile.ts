import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { UserModel } from '../../model/userModel';
import { AngularFireAuth } from '@angular/fire/auth';
import { SigninPage } from '../signin/signin';



/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user: UserModel = {
    userName: '',
    userAge: '',
    userProvince: '',
    
  }
  email: string = '';
  uid: any;
  itemList: AngularFireList<any>

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public userServiceProvider: UserServiceProvider,
    public alertCtrl: AlertController,
    public afAuth: AngularFireAuth
) {

    let user = this.afAuth.auth.currentUser.email
    this.email = user
    console.log(this.user)
    console.log(user)
    this.afAuth.authState.subscribe(auth => {
     if (auth) {
       this.uid = auth.uid;
       console.log('uid:' + this.uid)
       localStorage.setItem('uid', auth.uid)

    }
   })

    this.itemList = this.db.list('Users')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


  addU(user: UserModel) {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.itemList.push( {

       name: this.user.userName,
        age: this.user.userAge,
        province: this.user.userProvince,
        email: this.email,
        uid: this.uid

        }).
        then(() =>
          this.navCtrl.push(SigninPage));
                this.showAlert()

    })
    //this.userServiceProvider.addUser(user).then(newUser => {
    //  this.showAlert()
    //  this.navCtrl.push(UserProfileUpdatePage);

    //})
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'إضافة مستخدم',
      subTitle: '!شكرا, لقد تمت الأضافة بنجاح',
      buttons: ['OK']
    });
    alert.present();

  }

}
