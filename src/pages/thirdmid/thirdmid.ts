import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ThirdmidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thirdmid',
  templateUrl: 'thirdmid.html',
})
export class ThirdmidPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThirdmidPage');
  }


  openKuran = function (link) {
    window.open(link, '_system', 'location = 0');

  };


  openAdab = function (link) {

    window.open(link, '_system', 'location = 0');

  };

  openQawaed = function (link) {

    window.open(link, '_system', 'location = 0');

  };




  openPhysics = function (link) {

    window.open(link, '_system', 'location = 0');

  };

  openChemist = function (link) {

    window.open(link, '_system', 'location = 0');

  };

  openMath = function (link) {

    window.open(link, '_system', 'location = 0');

  };


  openBiology = function (link) {

    window.open(link, '_system', 'location = 0');

  };


  openHistory = function (link) {

    window.open(link, '_system', 'location = 0');

  };


  openGeography = function (link) {

    window.open(link, '_system', 'location = 0');

  };

  openWataniya = function (link) {

    window.open(link, '_system', 'location = 0');

  };


}
