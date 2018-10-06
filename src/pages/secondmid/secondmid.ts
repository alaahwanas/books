import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { ViewPdfPage } from '../view-Pdf/view-Pdf';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the SecondmidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secondmid',
  templateUrl: 'secondmid.html',
})
export class SecondmidPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondmidPage');
  }


  openKuran(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fsecondmiddle%2F%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85%20%D9%88%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.pdf?alt=media&token=61c34e9f-f54d-4c14-b3e1-6bc8af432bc5'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fsecondmiddle%2F%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%A7%D9%88%D9%84.pdf?alt=media&token=135b2ff4-8f65-439f-978e-d5d68e91f124'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fsecondmiddle%2F%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.pdf?alt=media&token=e8263fc6-c2ce-460d-acbe-3d30ead8dce5'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fsecondmiddle%2F%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%A7%D9%88%D9%84.pdf?alt=media&token=3c4b30d7-1c91-4be5-9046-e56deed6d7c4'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fsecondmiddle%2F%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.pdf?alt=media&token=649474b5-5e44-41d1-8fb2-fd42a2ac286e'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fsecondmiddle%2F%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%A7%D9%88%D9%84.pdf?alt=media&token=c5811947-03b7-458f-ac80-7ee49cf5d331'

        },
        title: 'الرياضيات الجزء الاول'
      }
    });
    modal.present();
  }


  openMathpractice(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fsecondmiddle%2F%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.pdf?alt=media&token=00364b57-42d2-475c-9a8d-73885d678610'

        },
        title: 'الرياضيات الجزء الثاني'
      }
    });
    modal.present();
  }


  openHistory(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fsecondmiddle%2F%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE.pdf?alt=media&token=253e78bf-9e38-418a-8c8d-338f73064279'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fsecondmiddle%2F%D8%AC%D8%BA%D8%B1%D8%A7%D9%81%D9%8A%D8%A9%20%D8%A7%D9%84%D9%88%D8%B7%D9%86%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A.pdf?alt=media&token=5ec760f5-ec3b-404f-996f-5922063a2287'

        },
        title: 'جغرافية الوطن العربي'
      }
    });
    modal.present();
  }

  openWataniya(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fsecondmiddle%2F%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9.pdf?alt=media&token=5ebdff66-bf0a-47a8-b88f-61731ec49da5'

        },
        title: 'التربية الوطنية'
      }
    });
    modal.present();
  }
  
  openEnglish(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/middle%2Fsecondmiddle%2F%D8%A7%D9%84%D8%A7%D9%86%D9%83%D9%84%D9%8A%D8%B2%D9%8A.pdf?alt=media&token=ae8f764f-d036-4c4b-8216-c0080cefb13b'

        },
        title: 'اللغة الانكليزية'
      }
    });
    modal.present();
  }


  goTHome() {
    this.navCtrl.push(TabsPage);

  }
}
