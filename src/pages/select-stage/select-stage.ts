import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ElementryPage } from '../elementry/elementry';
import { MiddlePage } from '../middle/middle';
import { HighPage } from '../high/high';

/**
 * Generated class for the SelectStagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-stage',
  templateUrl: 'select-stage.html',
})
export class SelectStagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectStagePage');
  }

  

  goToHigh() {

    this.navCtrl.push(HighPage);
  }
  goToMiddle() {

    this.navCtrl.push(MiddlePage);
  }
  goToElementry() {

    this.navCtrl.push(ElementryPage);
  }
}
