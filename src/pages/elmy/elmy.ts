import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { ViewPdfPage } from '../view-Pdf/view-Pdf';



/**
 * Generated class for the ElmyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-elmy',
  templateUrl: 'elmy.html',
})
export class ElmyPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElmyPage');
  }



  OpenQuran(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FsixthElmyBio%2F%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85.pdf?alt=media&token=8e9c26e0-1b20-4f29-b6c1-a2b12db129a3' 

        },
        title: 'القران الكريم'
      }
    });
    modal.present();
  }

  OpenAdab(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FsixthElmyBio%2F%D8%A7%D9%84%D8%A3%D8%AF%D8%A8%20%D9%88%D8%A7%D9%84%D9%86%D8%B5%D9%88%D8%B5.pdf?alt=media&token=a6d614af-d1a6-4f8b-935f-8e51da2ba9b3'

        },
        title: 'الأدب والنصوص'
      }
    });
    modal.present();
  }

  OpenQwaed(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FsixthElmyBio%2F%D9%82%D9%88%D8%A7%D8%B9%D8%AF%20%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9.pdf?alt=media&token=f4fb8acb-00cd-4282-9e15-1f93ad4231c9'

        },
        title: 'قواعد اللغة العربية'
      }
    });
    modal.present();
  }

  OpenBio(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FsixthElmyBio%2F%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%A3%D8%AD%D9%8A%D8%A7%D8%A1.pdf?alt=media&token=d586a51c-7101-417c-9a61-b088c8a6e99e'

        },
        title: 'علم الأحياء'
      }
    });
    modal.present();
  }

  OpenMath(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FsixthElmyBio%2F%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA.pdf?alt=media&token=ce0ed5f6-60b2-4397-a3ec-b9a6e76bf8f6'

        },
        title: 'الرياضيات'
      }
    });
    modal.present();
  }

  OpenPhysics(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FsixthElmyBio%2F%D8%A7%D9%84%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1.pdf?alt=media&token=68bd57e9-0ec0-4ff3-9070-eff112475527'

        },
        title: 'الفيزياء'
      }
    });
    modal.present();
  }

  OpenChimist(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FsixthElmyBio%2F%D8%A7%D9%84%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1.pdf?alt=media&token=e363a112-7cce-4872-9e56-fd71b5c0e6d3'

        },
        title: 'الكيمياء'
      }
    });
    modal.present();
  }

}
