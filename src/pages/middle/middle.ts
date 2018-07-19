import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirrstmidPage } from '../firrstmid/firrstmid';
import { SecondmidPage } from '../secondmid/secondmid';
import { ThirdmidPage } from '../thirdmid/thirdmid';

/**
 * Generated class for the MiddlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-middle',
  templateUrl: 'middle.html',
})
export class MiddlePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiddlePage');
  }


  goToFirstMid() {

    this.navCtrl.push(FirrstmidPage);
  } goToSecondMid() {

    this.navCtrl.push(SecondmidPage);
  } goToThirdMid() {

    this.navCtrl.push(ThirdmidPage);
  }
}

  


