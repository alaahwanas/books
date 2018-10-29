import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { ViewPdfPage } from '../view-Pdf/view-Pdf';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the ThirdmidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thirdmid',
  templateUrl: 'thirdmid.html',
})
export class ThirdmidPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThirdmidPage');
  }


  openKuran(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fthird%20middle%2F%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85%20%D9%88%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.pdf?alt=media&token=56d1764f-4ec1-4cb5-82da-079d174c1267'

        },
        title: 'القران الكريم'
      }
    });
    modal.present();
  }


  openAdab(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fthird%20middle%2F%D8%A7%D9%84%D8%A7%D8%AF%D8%A8%20%D9%88%D8%A7%D9%84%D9%86%D8%B5%D9%88%D8%B5.pdf?alt=media&token=e8f7eb10-dbf3-4b30-b425-14db1af4af51'

        },
        title: 'الأدب والنصوص'
      }
    });
    modal.present();
  }

  openQawaed(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fthird%20middle%2F%D9%82%D9%88%D8%A7%D8%B9%D8%AF%20%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9.pdf?alt=media&token=b5ff2f7f-9c37-48cd-aa9e-e9b897f8da60'

        },
        title: 'قواعد اللغة العربية'
      }
    });
    modal.present();
  }



  openPhysics(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fthird%20middle%2F%D8%A7%D9%84%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1.pdf?alt=media&token=415c4f54-3be5-439d-a306-1f30ea0a57fe'

        },
        title: 'الفيزياء'
      }
    });
    modal.present();
  }

  openChemist(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fthird%20middle%2F%D8%A7%D9%84%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1.pdf?alt=media&token=cf10ee3e-bdef-427a-8cd7-c6b869deeef5'

        },
        title: 'الكيمياء'
      }
    });
    modal.present();
  }

  openMath(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fthird%20middle%2F%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA.pdf?alt=media&token=208362ae-078f-4a0d-852d-d57885441da8' 

        },
        title: 'الرياضيات'
      }
    });
    modal.present();
  }


  openBiology(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fthird%20middle%2F%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%AD%D9%8A%D8%A7%D8%A1.pdf?alt=media&token=95f390fb-1365-4614-bf6b-b900bd236c30'

        },
        title: 'الأحياء'
      }
    });
    modal.present();
  }


  openHistory(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fthird%20middle%2F%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE.pdf?alt=media&token=e52f0a7b-c529-4a56-97cd-1bdcacb632ee'

        },
        title: 'التاريخ'
      }
    });
    modal.present();
  }


  openGeography(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fthird%20middle%2F%D8%AC%D8%BA%D8%B1%D8%A7%D9%81%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A7%D9%82.pdf?alt=media&token=63b8f857-d986-40ba-b3e2-102795001f84'

        },
        title: 'جغرافية العراق'
      }
    });
    modal.present();
  }

  openWataniya(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fthird%20middle%2F%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9.pdf?alt=media&token=a86e03f6-483f-464d-9682-3fbd3710ee43'

        },
        title: 'التربية الوطنية والاجتماعية'
      }
    });
    modal.present();
  }

  goTHome() {
    this.navCtrl.setRoot(TabsPage);

  }
}
