import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { SingupPage } from '../singup/singup';
import { TabsPage } from '../tabs/tabs';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {


  email: string = '';

  password: string = '';
 
  isLoggedIn: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authServiceProvider: AuthServiceProvider,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  signup() {
    this.navCtrl.push(SingupPage);

  }

  signin() {
    //let credentials = {
    //  email: this.data.email,
    //  password: this.data.password
    //}
    //try {
    //const result =
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(user => {
        console.log(this.email, this.password)
        localStorage.setItem('email', this.afAuth.auth.currentUser.email)
        this.afAuth.authState.subscribe(auth => {
          if (auth) {
            localStorage.setItem('uid', auth.uid)
            this.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', 'true')
            console.log(this.isLoggedIn)
          }
        })


        this.navCtrl.push(TabsPage)


      }).catch(error => {
        console.error(error)
        this.showAlert()


      })

  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: ' حدث خطأ',
      subTitle: 'يوجد خطأ في البريد الالكتروني او كلمة السر',
      buttons: ['OK']
    });
    alert.present();

  }
  }








  

