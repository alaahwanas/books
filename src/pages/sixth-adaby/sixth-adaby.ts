import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { ViewPdfPage } from '../view-Pdf/view-Pdf';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SixthAdabyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sixth-adaby',
  templateUrl: 'sixth-adaby.html',
})
export class SixthAdabyPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SixthAdabyPage');
  }


  OpenQuran(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FsixthAdaby%2F%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85.pdf?alt=media&token=264ea417-e161-425b-967d-bc0c4c14e6e0'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FsixthAdaby%2F%D8%A7%D9%84%D8%A3%D8%AF%D8%A8%20%D9%88%D8%A7%D9%84%D9%86%D8%B5%D9%88%D8%B5.pdf?alt=media&token=fdd8aa7c-8be8-4a73-9683-ec36da638c91'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FsixthAdaby%2F%D9%82%D9%88%D8%A7%D8%B9%D8%AF%20%D8%A7%D9%84%D9%84%D8%BA%D8%A9%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9.pdf?alt=media&token=c1fa868b-ee87-4199-8a02-a98e6d4fdd75'

        },
        title: 'قواعد اللغة العربية '
      }
    });
    modal.present();
  }

  OpenNaqed(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FsixthAdaby%2F%D8%A7%D9%84%D9%86%D9%82%D8%AF%20%D8%A7%D9%84%D8%A3%D8%AF%D8%A8%D9%8A.pdf?alt=media&token=a28b7496-f9c8-4e4f-992d-55970c4cd822'

        },
        title: 'النقد الأدبي'
      }
    });
    modal.present();
  }

  OpenEconomic(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FsixthAdaby%2F%D8%A7%D9%84%D8%A3%D9%82%D8%AA%D8%B5%D8%A7%D8%AF.pdf?alt=media&token=af024817-eeac-4afd-878f-4c22b8f63a13'

        },
        title: 'الأقتصاد'
      }
    });
    modal.present();
  }

  OpenMath(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FsixthAdaby%2F%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA.pdf?alt=media&token=a75fbd66-0fa7-4a3e-b87c-b43898568532'

        },
        title: 'الرياضيات'
      }
    });
    modal.present();
  }

  OpenHistory(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FsixthAdaby%2F%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%20%D8%A7%D9%84%D8%A8%D9%84%D8%A7%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB.pdf?alt=media&token=99941566-d9eb-4543-97c7-801c33569535'

        },
        title: 'تاريخ البلاد الحديث'
      }
    });
    modal.present();
  }

  OpenGeography(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FsixthAdaby%2F%D8%A7%D9%84%D8%AC%D8%BA%D8%B1%D8%A7%D9%81%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D9%8A%D8%A9.pdf?alt=media&token=bdc34236-14e7-4bbe-8348-ec9999655546'

        },
        title: 'الجغرافية البشرية'
      }
    });
    modal.present();
  }

  goTHome() {
    this.navCtrl.setRoot(TabsPage);

  }

}
