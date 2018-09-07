import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SixthElPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sixth-el',
  templateUrl: 'sixth-el.html',
})
export class SixthElPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SixthElPage');
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


  openSocials = function (link) {

    window.open(link, '_system', 'location = 0');

  };

  openQawaed = function (link) {

    window.open(link, '_system', 'location = 0');

  };
  
  openEnglish = function (link) {

    window.open(link, '_system', 'location = 0');

  };

}
