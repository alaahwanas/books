import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { ViewPdfPage } from '../view-Pdf/view-Pdf';


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
  
    
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstElPage');
  }

 
  openKuran(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffirst%2F%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85.pdf?alt=media&token=95699fe4-749c-4182-99c7-9ed1571abcf3'

        },
        title:  'القران الكريم والتربية الاسلامية'
      }
    });
    modal.present();
  }
    

  openKeraa(): void {
    
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffirst%2F%D9%82%D8%B1%D8%A7%D8%A6%D8%AA%D9%8A.pdf?alt=media&token=c56601b8-1d3e-46a9-8fe9-395d4494f173',
        },
        title: 'قراءتي'
      }
    });
    modal.present();
  }
  
    
  


  openElom(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffirst%2F%D8%B9%D9%84%D9%88%D9%85.pdf?alt=media&token=45d1ab11-f509-4701-9824-9ba6104cb602'
        },
        title: 'العلوم'
      }
    });
    modal.present();
  }
  
  openElomPractice(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffirst%2F%D8%B9%D9%84%D9%88%D9%85%20%D9%86%D8%B4%D8%A7%D8%B7.pdf?alt=media&token=2bb9bb08-2aef-4e55-b415-a0bf750f0577'
        },
        title:'العلوم تمريتات'
      }
    });
    modal.present();
  }

  openMath(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffirst%2F%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA.pdf?alt=media&token=d2bc29f2-84a7-41a9-a8ec-1bcc262ad411'
        },
        title: 'الرياضيات'
      }
    });
    modal.present();
  }
  

  openMathpractice(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffirst%2F%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D9%86%D8%B4%D8%A7%D8%B7.pdf?alt=media&token=6f85f0bb-ae2e-497a-a01d-84bacb6e53fd'
        },
        title: 'الرياضيات تمرينات'
      }
    });
    modal.present();
  }

  

  openEnglish(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffirst%2F%D8%A7%D9%86%D9%83%D9%84%D9%8A%D8%B2%D9%8A.pdf?alt=media&token=539cda0e-5aa2-4488-9229-95af7aeece09'
        },
        title: 'اللغة الانكليزية'
      }
    });
    modal.present();
  }
 
}
