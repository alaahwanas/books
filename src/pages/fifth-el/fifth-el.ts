import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { ViewPdfPage } from '../view-Pdf/view-Pdf';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the FifthElPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fifth-el',
  templateUrl: 'fifth-el.html',
})
export class FifthElPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FifthElPage');
  }


  openKuranFifthEl(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffifth%2F%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85.pdf?alt=media&token=68572066-3000-4caa-94f9-9c4bc4ec2618'

        },
        title: 'القراَن الكريم'
      }
    });
    modal.present();
  }


  openKeraaFifthEl(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffifth%2F%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%A1%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9.pdf?alt=media&token=fdf68e8f-a275-4a34-b6ed-bb5462020cdb'

        },
        title: 'القراءة العربية'
      }
    });
    modal.present();
  }





  openElomFifthEl(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffifth%2F%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85.pdf?alt=media&token=28b49625-3645-41e6-a5f9-1a736826fb87'

        },
        title: 'العلوم'
      }
    });
    modal.present();
  }

  openElomPracticeFifthEl(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffifth%2F%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%AA%D9%85%D8%B1%D9%8A%D9%86%D8%A7%D8%AA.pdf?alt=media&token=4329fb15-5396-4537-8e40-0e3b157dc640'

        },
        title: 'العلوم تمرينات'
      }
    });
    modal.present();
  }

  openMathFifthEl(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffifth%2F%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA.pdf?alt=media&token=1c066177-fe9d-4f8f-b1f0-517c1c2cb09b'

        },
        title: 'الرياضيات'
      }
    });
    modal.present();
  }


  openSocialFifthEl(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffifth%2F%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A7%D8%AA.pdf?alt=media&token=930be09a-5999-401f-8882-b8699c78f2be'

        },
        title: 'الأجتماعيات'
      }
    });
    modal.present();
  }


  openQawaedFifthEl(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffifth%2F%D9%82%D9%88%D8%A7%D8%B9%D8%AF%20%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9.pdf?alt=media&token=1fe8608f-50b2-4dd2-88a4-7feec78bb057'

        },
        title: 'قواعد اللغة العربية'
      }
    });
    modal.present();
  }
  
  openEnglishFifthEl(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffifth%2FEnglish%20for%20Iraq%205th%20primary.pdf?alt=media&token=8174ca6f-c86b-4f88-8e9d-a03b222c78ed'

        },
        title: 'اللغة الأنكليزية'
      }
    });
    modal.present();
  }

  goTHome() {
    this.navCtrl.push(TabsPage);

  }

}
