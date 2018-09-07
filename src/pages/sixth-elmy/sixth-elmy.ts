import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SixthElmyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sixth-elmy',
  templateUrl: 'sixth-elmy.html',
})
export class SixthElmyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SixthElmyPage');
  }


  OpenQuran = function (link) {
    window.open(link, '_system', 'location = 0');

  };

  OpenAdab = function (link) {
    window.open(link, '_system', 'location = 0');

  };

  OpenQwaed = function (link) {
    window.open(link, '_system', 'location = 0');

  };

  OpenEconomic = function (link) {
    window.open(link, '_system', 'location = 0');

  };

  OpenMath = function (link) {
    window.open(link, '_system', 'location = 0');

  };

  OpenPhysics = function (link) {
    window.open(link, '_system', 'location = 0');

  };

  OpenChimist = function (link) {
    window.open(link, '_system', 'location = 0');

  };
}
