import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { ViewPdfPage } from '../view-Pdf/view-Pdf';
import { TabsPage } from '../tabs/tabs';

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

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForthAdabyPage');
  }


  openKuran(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FforthAdaby%2F%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85%20%D9%88%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.pdf?alt=media&token=924d8c5f-9006-4dd4-b928-2287f6bfe3a0'

        },
        title: 'القراَن الكريم'
      }
    });
    modal.present();
  }


  openAdab(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FforthAdaby%2F%D8%A7%D9%84%D8%A3%D8%AF%D8%A8%20%D9%88%D8%A7%D9%84%D9%86%D8%B5%D9%88%D8%B5.pdf?alt=media&token=d14714c6-afb0-4e71-97a0-7134e73ce8e6'

        },
        title: 'الأدب والنصوص'
      }
    });
    modal.present();
  }

  openQwaed(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FforthAdaby%2F%D9%82%D9%88%D8%A7%D8%B9%D8%AF%20%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9.pdf?alt=media&token=2b20a43d-8f0a-405a-9bd3-9a945d56ad36'

        },
        title: 'قواعد اللغة العربية'
      }
    });
    modal.present();
  }




  openSocial(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FforthAdaby%2F%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9.pdf?alt=media&token=5165c0a8-2de0-4c88-8e1a-b585b4d7eb9a'

        },
        title: 'علم الاجتماع'
      }
    });
    modal.present();
  }

  openMath(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FforthAdaby%2F%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA.pdf?alt=media&token=49ee5f4d-6e3f-4196-9a43-338e99d891b7'

        },
        title: 'الرياضيات'
      }
    });
    modal.present();
  }

  openGeographyBasics(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FforthAdaby%2F%D8%A3%D8%B3%D8%B3%20%D8%A7%D9%84%D8%AC%D8%BA%D8%B1%D8%A7%D9%81%D9%8A%D8%A9.pdf?alt=media&token=ba3ed1bb-f0f8-453d-9f76-cd4cacab8726'

        },
        title: 'أسس الجغرافية'
      }
    });
    modal.present();
  }


  openHistory(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FforthAdaby%2F%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%20%D8%A7%D9%84%D8%AD%D8%B6%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A3%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.pdf?alt=media&token=02f3ac78-bacf-4c6b-89b3-24750ab5f953'

        },
        title: 'تاريخ الحضارة العربية والأسلامية'
      }
    });
    modal.present();
  }

  goTHome() {
    this.navCtrl.setRoot(TabsPage);

  }

}
