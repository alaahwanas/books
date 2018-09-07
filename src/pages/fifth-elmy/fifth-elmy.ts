import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FifthElmyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fifth-elmy',
  templateUrl: 'fifth-elmy.html',
})
export class FifthElmyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FifthElmyPage');
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

  OpenEarth = function (link) {
    window.open(link, '_system', 'location = 0');

  };


}
