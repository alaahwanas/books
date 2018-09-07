import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ThirdElPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-third-el',
  templateUrl: 'third-el.html',
})
export class ThirdElPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThirdElPage');
  }




  openKuran = function (link) {
    window.open(link, '_system', 'location = 0');

  };


  openKeraa = function (link) {

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


}
