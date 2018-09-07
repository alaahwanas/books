import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ForthElmyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forth-elmy',
  templateUrl: 'forth-elmy.html',
})
export class ForthElmyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForthElmyPage');
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


  openBio = function (link) {
    window.open(link, '_system', 'location = 0');

  };


  openMath = function (link) {
    window.open(link, '_system', 'location = 0');

  };


  openPhysics = function (link) {
    window.open(link, '_system', 'location = 0');

  };


  openChimest = function (link) {
    window.open(link, '_system', 'location = 0');

  };



}
