import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FifthElPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fifth-el',
  templateUrl: 'fifth-el.html',
})
export class FifthElPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FifthElPage');
  }


  openKuranFifthEl = function (link) {
    window.open(link, '_system', 'location = 0');

  };


  openKeraaFifthEl = function (link) {

    window.open(link, '_system', 'location = 0');

  };





  openElomFifthEl = function (link) {

    window.open(link, '_system', 'location = 0');

  };

  openElomPracticeFifthEl = function (link) {

    window.open(link, '_system', 'location = 0');

  };

  openMathFifthEl = function (link) {

    window.open(link, '_system', 'location = 0');

  };


  openSocialFifthEl = function (link) {

    window.open(link, '_system', 'location = 0');

  };


  openQawaedFifthEl = function (link) {

    window.open(link, '_system', 'location = 0');

  };
  
  openEnglishFifthEl = function (link) {

    window.open(link, '_system', 'location = 0');

  };

}
