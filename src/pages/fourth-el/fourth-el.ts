import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FourthElPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fourth-el',
  templateUrl: 'fourth-el.html',
})
export class FourthElPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FourthElPage');
  }

  openKuranForthEl = function (link) {
    window.open(link, '_system', 'location = 0');

  };


  openKeraaForthEl = function (link) {

    window.open(link, '_system', 'location = 0');

  };





  openElomForthEl = function (link) {

    window.open(link, '_system', 'location = 0');

  };

  openElomPracticeForthEl = function (link) {

    window.open(link, '_system', 'location = 0');

  };

  openMathForthEl = function (link) {

    window.open(link, '_system', 'location = 0');

  };


  openSocialForthEl = function (link) {

    window.open(link, '_system', 'location = 0');

  };


  openQawaedForthEl = function (link) {

    window.open(link, '_system', 'location = 0');

  };


  openEnglish = function (link) {

    window.open(link, '_system', 'location = 0');

  };


  openEnghlishPractice = function (link) {

    window.open(link, '_system', 'location = 0');

  };
}
