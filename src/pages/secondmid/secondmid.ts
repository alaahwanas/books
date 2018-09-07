import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SecondmidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secondmid',
  templateUrl: 'secondmid.html',
})
export class SecondmidPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondmidPage');
  }


  openKuran = function (link) {
    window.open(link, '_system', 'location = 0');

  };


  openKeraa = function (link) {

    window.open(link, '_system', 'location = 0');

  };

  openKeraaTwo = function (link) {

    window.open(link, '_system', 'location = 0');

  };




  openElom = function (link) {

    window.open(link, '_system', 'location = 0');

  };

  openElomPractice = function (link) {

    window.open(link, '_system', 'location = 0');

  };

  openMath = function (link) {

    window.open(link, '_system', 'location = 0');

  };


  openMathpractice = function (link) {

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
  
  openEnglish = function (link) {

    window.open(link, '_system', 'location = 0');

  };

}
