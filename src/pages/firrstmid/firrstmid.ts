import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { ViewPdfPage } from '../view-Pdf/view-Pdf';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the FirrstmidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firrstmid',
  templateUrl: 'firrstmid.html',
})
export class FirrstmidPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirrstmidPage');
  }


  openKuran(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2FFirst%20middle%2F%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85%20%D9%88%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.pdf?alt=media&token=4e3a3c2d-7129-4bf5-a5f4-f20f3647c6c9' 

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2FFirst%20middle%2F%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%A7%D9%88%D9%84.pdf?alt=media&token=17627194-0861-4c89-85a2-2f7fd5ceba50'

        },
        title: 'اللغة العربية الجزء الأول'
      }
    });
    modal.present();
  }

  openKeraaTwo(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2FFirst%20middle%2F%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.pdf?alt=media&token=3fd67355-013e-4740-a618-d0ea2ccf380b'

        },
        title: 'اللغة العربية الجزء الثاني'
      }
    });
    modal.present();
  }




  openElom(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2FFirst%20middle%2F%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%A7%D9%88%D9%84.pdf?alt=media&token=39d8ebf3-90cc-4882-975a-59d0d07503f8'

        },
        title: 'العلوم الجزء الاول'
      }
    });
    modal.present();
  }

  openElomPractice(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2FFirst%20middle%2F%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.pdf?alt=media&token=bb62e960-8ac8-45f3-a028-c474cc7eea0a'

        },
        title: 'العلوم الجزء الثاني'
      }
    });
    modal.present();
  }

  openMath(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2FFirst%20middle%2F%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%A7%D9%88%D9%84.pdf?alt=media&token=34494439-4c23-4e85-a794-06163386fc7c'

        },
        title: 'لرياضيات الجزء الاول'
      }
    });
    modal.present();
  }


  openMathpractice(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2FFirst%20middle%2F%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.pdf?alt=media&token=95de6b93-de3d-4f6c-a7cf-f9acc8d94817'

        },
        title: 'الرياضيات الجزء الثاني'
      }
    });
    modal.present();
  }


  openSocials(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2FFirst%20middle%2F%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A7%D8%AA.pdf?alt=media&token=6615d425-69f8-4352-9c2d-bb670a201c30'

        },
        title: 'الأجتماعيات'
      }
    });
    modal.present();
  }

  openEnglishPractice(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2FFirst%20middle%2F%D9%86%D8%B4%D8%A7%D8%B7%20%D8%A7%D9%86%D9%83%D9%84%D9%8A%D8%B2%D9%8A.pdf?alt=media&token=b0c55aed-83f2-41da-a0ce-2fcf850da9b2'

        },
        title: 'الانكليزي نشاط'
      }
    });
    modal.present();
  }

  openEnglish(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2FFirst%20middle%2F%D8%A7%D9%84%D8%A7%D9%86%D9%83%D9%84%D9%8A%D8%B2%D9%8A.pdf?alt=media&token=112dd0f3-6da1-44e7-936f-ee3e5230ac04'

        },
        title: 'اللغة الانكليزية'
      }
    });
    modal.present();
  }

  goTHome() {
    this.navCtrl.setRoot(TabsPage);

  }

}
