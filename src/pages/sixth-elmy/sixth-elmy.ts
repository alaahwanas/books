import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { ViewPdfPage } from '../view-Pdf/view-Pdf';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SixthElmyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sixth-elmy',
  templateUrl: 'sixth-elmy.html',
})
export class SixthElmyPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SixthElmyPage');
  }


  OpenQuran(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FSixth%20Elmy%20Applied%2F%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85%20%D9%88%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A3%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.pdf?alt=media&token=9243810c-66b1-4aed-acc8-a82bf56d8469'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FSixth%20Elmy%20Applied%2F%D8%A7%D9%84%D8%A3%D8%AF%D8%A8%20%D9%88%D8%A7%D9%84%D9%86%D8%B5%D9%88%D8%B5.pdf?alt=media&token=ae2b79b0-4fab-40aa-b257-cd85ddfb10df'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FSixth%20Elmy%20Applied%2F%D9%82%D9%88%D8%A7%D8%B9%D8%AF%20%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9.pdf?alt=media&token=93fea5f8-3625-4e87-924e-db4f2158819a'

        },
        title: 'قواعد اللغة العربية'
      }
    });
    modal.present();
  }

  OpenEconomic(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FSixth%20Elmy%20Applied%2F%D8%A7%D9%84%D8%A3%D9%82%D8%AA%D8%B5%D8%A7%D8%AF.pdf?alt=media&token=c6c7dcaa-28ea-459f-9b25-da9c23f43d8c'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FSixth%20Elmy%20Applied%2F%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA.pdf?alt=media&token=34016787-066e-45c0-8aee-ec85a0980fdb'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FSixth%20Elmy%20Applied%2F%D8%A7%D9%84%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1.pdf?alt=media&token=478935db-7b4b-4e9d-bc1a-1454837c929a'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FSixth%20Elmy%20Applied%2F%D8%A7%D9%84%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1.pdf?alt=media&token=f693410c-2133-4e8d-a7bf-58e3fa39b681'

        },
        title: 'الكيمياء'
      }
    });
    modal.present();
  }

  goTHome() {
    this.navCtrl.setRoot(TabsPage);

  }
}
