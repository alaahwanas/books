import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { ViewPdfPage } from '../view-Pdf/view-Pdf';
import { TabsPage } from '../tabs/tabs';


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

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FifthAdabyPage');
  }


  openKuran(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FfifthAdaby%2F%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85.pdf?alt=media&token=99050039-4e11-489f-8c4e-75d1cb30808f'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FfifthAdaby%2F%D8%A7%D9%84%D8%A7%D8%AF%D8%A8%20%D9%88%D8%A7%D9%84%D9%86%D8%B5%D9%88%D8%B5.pdf?alt=media&token=b66ae4e2-9f6e-4675-a54b-518a3ddec9d4'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FfifthAdaby%2F%D9%82%D9%88%D8%A7%D8%B9%D8%AF%20%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9.pdf?alt=media&token=0a4609dd-69eb-4b73-a4d1-cae86b1c5606'

        },
        title: 'قواعد اللغة العربية'
      }
    });
    modal.present();
  }


  openFalsafa(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FfifthAdaby%2F%D8%A7%D9%84%D9%81%D9%84%D8%B3%D9%81%D8%A9%20%D9%88%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D9%86%D9%81%D8%B3.pdf?alt=media&token=c85ef7d9-6641-429d-b657-6b91c98670eb'

        },
        title: 'الفلسفة وعلم النفس'
      }
    });
    modal.present();
  }


  openBalagha(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FfifthAdaby%2F%D8%A7%D9%84%D8%A8%D9%84%D8%A7%D8%BA%D8%A9%20%D9%88%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82.pdf?alt=media&token=c1a8a8b9-1e95-4513-9d92-af8efe20c5c9'

        },
        title: 'البلاغة والتطبيق'
      }
    });
    modal.present();
  }


  openMath(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FfifthAdaby%2F%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA.pdf?alt=media&token=bda84414-2efc-4913-b660-449a08320d77'

        },
        title: 'الرياضيات'
      }
    });
    modal.present();
  }


  openGeography(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FfifthAdaby%2F%D8%A7%D9%84%D8%AC%D8%BA%D8%B1%D8%A7%D9%81%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A9.pdf?alt=media&token=9393924a-db38-46d7-9aa3-b70c80d4c6e1'

        },
        title: 'الجغرافية الطبيعية'
      }
    });
    modal.present();
  }


  openHistory(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FfifthAdaby%2F%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%20%D8%A7%D9%88%D8%B1%D8%A8%D8%A7%20%D9%88%D8%A7%D9%85%D8%B1%D9%8A%D9%83%D8%A7%20%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB.pdf?alt=media&token=2b0f79e0-4d6e-4074-9cdb-a266d5cebdd4'

        },
        title: 'تاريخ اوربا وامريكا الحديث'
      }
    });
    modal.present();
  }

  goTHome() {
    this.navCtrl.setRoot(TabsPage);

  }


}
