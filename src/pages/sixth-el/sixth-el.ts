import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { ViewPdfPage } from '../view-Pdf/view-Pdf';
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

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SixthElPage');
  }



  openKuran(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Fsixth%2F%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85%20%D9%88%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.pdf?alt=media&token=443f2101-e6b8-4bde-b033-d5cf1ad0bd7b'

        },
        title: 'القران الكريم'
      }
    });
    modal.present();
  }


  openKeraa(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Fsixth%2F%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%A1%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9.pdf?alt=media&token=5ba16782-9560-488f-81b9-305aa4320eb7'

        },
        title: 'القراءة العربية'
      }
    });
    modal.present();
  }





  openElom(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Fsixth%2F%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85.pdf?alt=media&token=0ea98909-509b-4ea1-b4b9-f75bccb52805'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Fsixth%2F%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%AA%D9%85%D8%B1%D9%8A%D9%86%D8%A7%D8%AA.pdf?alt=media&token=ff765992-cc4b-44c2-805f-9a842cc85df6'

        },
        title: 'العلوم تمرينات'
      }
    });
    modal.present();
  }

  openMath(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Fsixth%2F%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA.pdf?alt=media&token=70487ee5-b1a7-493d-bf29-722202307372'

        },
        title: 'الرياضيات'
      }
    });
    modal.present();
  }


  openSocials(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Fsixth%2F%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A7%D8%AA.pdf?alt=media&token=74126868-2d6f-44c1-be30-583ae5571008'

        },
        title: 'الأجتماعيات'
      }
    });
    modal.present();
  }

  openQawaed(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Fsixth%2F%D9%82%D9%88%D8%A7%D8%B9%D8%AF%20%D8%A7%D9%84%D9%84%D9%81%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9.pdf?alt=media&token=e5aaf142-54ee-4306-8946-c3fa2dbb6d68'

        },
        title: 'قواعد اللغة العربية'
      }
    });
    modal.present();
  }
  
  openEnglish(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Fsixth%2F%D8%A7%D9%84%D8%A7%D9%86%D9%83%D9%84%D9%8A%D8%B2%D9%8A.pdf?alt=media&token=c246ef41-73a6-4144-8990-993eec6df49f'

        },
        title: 'اللغة الأنكليزية'
      }
    });
    modal.present();
  }

}
