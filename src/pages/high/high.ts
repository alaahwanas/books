import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdabyPage } from '../adaby/adaby';
import { ElmyPage } from '../elmy/elmy';
import { ForthAdabyPage } from '../forth-adaby/forth-adaby';
import { FifthAdabyPage } from '../fifth-adaby/fifth-adaby';
import { SixthAdabyPage } from '../sixth-adaby/sixth-adaby';
import { ForthElmyPage } from '../forth-elmy/forth-elmy';
import { FifthElmyPage } from '../fifth-elmy/fifth-elmy';
import { SixthElmyPage } from '../sixth-elmy/sixth-elmy';

import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the HighPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-high',
  templateUrl: 'high.html',
})
export class HighPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HighPage');
  }

  goToForthAdaby() {

    this.navCtrl.push(ForthAdabyPage);
  }

  goToForthElmy() {

    this.navCtrl.push(ForthElmyPage);
  }

  goToFifthAdaby() {

    this.navCtrl.push(FifthAdabyPage);
  }

  goToFifthElmyAplied() {

    this.navCtrl.push(FifthElmyPage);
  }

  goToFifthElmyBio() {

    this.navCtrl.push(AdabyPage);
  }

  goToSixthAdaby() {

    this.navCtrl.push(SixthAdabyPage);
  }

  goToSixthElmyAplied() {

    this.navCtrl.push(SixthElmyPage);
  }

  goToSixthElmyBio() {

    this.navCtrl.push(ElmyPage);
  }


  goTHome() {
    this.navCtrl.push(TabsPage);

  }

}
