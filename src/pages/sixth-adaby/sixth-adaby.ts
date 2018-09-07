import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SixthAdabyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sixth-adaby',
  templateUrl: 'sixth-adaby.html',
})
export class SixthAdabyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SixthAdabyPage');
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

  OpenNaqed = function (link) {
    window.open(link, '_system', 'location = 0');

  };

  OpenEconomic = function (link) {
    window.open(link, '_system', 'location = 0');

  };

  OpenMath = function (link) {
    window.open(link, '_system', 'location = 0');

  };

  OpenHistory = function (link) {
    window.open(link, '_system', 'location = 0');

  };

  OpenGeography = function (link) {
    window.open(link, '_system', 'location = 0');

  };


}
