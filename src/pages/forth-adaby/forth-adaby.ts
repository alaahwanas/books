import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ForthAdabyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forth-adaby',
  templateUrl: 'forth-adaby.html',
})
export class ForthAdabyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForthAdabyPage');
  }


  openKuran = function (link) {
    window.open(link, '_system', 'location = 0');

  };


  openAdab = function (link) {

    window.open(link, '_system', 'location = 0');

  };

  openQwaed = function (link) {

    window.open(link, '_system', 'location = 0');

  };




  openSocial = function (link) {

    window.open(link, '_system', 'location = 0');

  };

  openMath = function (link) {

    window.open(link, '_system', 'location = 0');

  };

  openGeographyBasics = function (link) {

    window.open(link, '_system', 'location = 0');

  };


  openHistory = function (link) {

    window.open(link, '_system', 'location = 0');

  };


}
