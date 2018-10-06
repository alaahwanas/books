import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { ProfilePage } from '../profile/profile';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the SingupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage {

  data = {
    email: '',

    password: ''
  }


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authServiceProvider: AuthServiceProvider,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController) {

   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingupPage');
  }

  signin() {
    this.navCtrl.push(SigninPage);

  }


  async signup() {
    let credentials = {
      email: this.data.email,
      password: this.data.password
    }
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
      console.log(result);
      console.log(result.uid);

      if (result) {
        this.navCtrl.push(ProfilePage,  result)

      }
    }

    

    catch (e) {
      console.log(e);
      this.showAlert()

    }

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
