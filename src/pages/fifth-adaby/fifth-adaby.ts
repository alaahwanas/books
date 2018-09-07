import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FifthAdabyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fifth-adaby',
  templateUrl: 'fifth-adaby.html',
})
export class FifthAdabyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FifthAdabyPage');
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


  openFalsafa = function (link) {
    window.open(link, '_system', 'location = 0');

  };


  openBalagha = function (link) {
    window.open(link, '_system', 'location = 0');

  };


  openMath = function (link) {
    window.open(link, '_system', 'location = 0');

  };


  openGeography = function (link) {
    window.open(link, '_system', 'location = 0');

  };


  openHistory = function (link) {
    window.open(link, '_system', 'location = 0');

  };



}
