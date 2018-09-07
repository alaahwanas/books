import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the FirstElPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first-el',
  templateUrl: 'first-el.html',
})



export class FirstElPage {
  
  pdfSrc;


    
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstElPage');
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

  

  openEnglish = function (link) {

    window.open(link, '_system', 'location = 0');

  };
 
}
