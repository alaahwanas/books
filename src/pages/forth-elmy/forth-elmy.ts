import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { ViewPdfPage } from '../view-Pdf/view-Pdf';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the ForthElmyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forth-elmy',
  templateUrl: 'forth-elmy.html',
})
export class ForthElmyPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForthElmyPage');
  }


  openKuran(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FforthElmy%2F%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85%20%D9%88%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A3%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.pdf?alt=media&token=5c29b29b-bd94-4f4b-b252-2b4ea208714b'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FforthElmy%2F%D8%A7%D9%84%D8%A3%D8%AF%D8%A8%20%D9%88%D8%A7%D9%84%D9%86%D8%B5%D9%88%D8%B5.pdf?alt=media&token=ab5b4aa7-d901-4bd6-89c6-f306fc7cf4f9'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FforthElmy%2F%D9%82%D9%88%D8%A7%D8%B9%D8%AF%20%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9.pdf?alt=media&token=6ab3de96-ef42-4189-96f8-5516f42f3af3'

        },
        title: 'قواعد اللغة العربية'
      }
    });
    modal.present();
  }


  openBio(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FforthElmy%2F%D8%A7%D9%84%D8%A7%D8%AD%D9%8A%D8%A7%D8%A1.pdf?alt=media&token=92d7f747-d42b-441e-9559-c7007abdd60b'

        },
        title: 'الأحياء'
      }
    });
    modal.present();
  }


  openMath(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: ''

        },
        title: 'الرياضيات'
      }
    });
    modal.present();
  }


  openPhysics(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FforthElmy%2F%D8%A7%D9%84%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1.pdf?alt=media&token=a98566eb-4939-4bfd-a86f-7fc6ef6c4c51'

        },
        title: 'الفيزياء'
      }
    });
    modal.present();
  }


  openChimest(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FforthElmy%2F%D8%A7%D9%84%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1.pdf?alt=media&token=f1a244b3-1866-444b-90fe-7386cc992661'

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
