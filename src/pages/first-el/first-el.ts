import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { FileOpener } from '@ionic-native/file-opener';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private document: DocumentViewer, private fileOpener: FileOpener) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstElPage');
  }

    
  openKuran() {

    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }
    this.document.viewDocument('assets\test.pdf', 'application/pdf', options);
  }


  openKeraa() {
    
    }

}
