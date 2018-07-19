import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirstElPage } from '../first-el/first-el';
import { SecondElPage } from '../second-el/second-el';
import { ThirdElPage } from '../third-el/third-el';
import { FourthElPage } from '../fourth-el/fourth-el';
import { FifthElPage } from '../fifth-el/fifth-el';
import { SixthElPage } from '../sixth-el/sixth-el';

/**
 * Generated class for the ElementryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-elementry',
  templateUrl: 'elementry.html',
})
export class ElementryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElementryPage');
  }


  goToFirstEl() {

    this.navCtrl.push(FirstElPage);
  }
  goToSecondEl() {

    this.navCtrl.push(SecondElPage);
  }
  goToThirdEl() {

    this.navCtrl.push(ThirdElPage);
  }
  goToFourthEl() {

    this.navCtrl.push(FourthElPage);
  }
  goTofifthEl() {

    this.navCtrl.push(FifthElPage);
  }
  goToSixthEl() {

    this.navCtrl.push(SixthElPage);
  }

  
  
}
