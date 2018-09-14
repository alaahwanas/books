import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { ViewPdfPage } from '../view-Pdf/view-Pdf';

/**
 * Generated class for the FifthElmyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fifth-elmy',
  templateUrl: 'fifth-elmy.html',
})
export class FifthElmyPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FifthElmyPage');
  }


  OpenQuran(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FFifthAppliedElmy%2F%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85.pdf?alt=media&token=e5b01451-8b20-4af1-9fef-fccd032c67d0' 

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FFifthAppliedElmy%2F%D8%A7%D9%84%D8%A7%D8%AF%D8%A8%20%D9%88%D8%A7%D9%84%D9%86%D8%B5%D9%88%D8%B5.pdf?alt=media&token=08fdf736-5a91-40ba-bd44-d7eaeef9fb50'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FFifthAppliedElmy%2F%D9%82%D9%88%D8%A7%D8%B9%D8%AF%20%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9.pdf?alt=media&token=cdc7597a-9650-4ff1-8c39-a6b2347a5d67'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FFifthAppliedElmy%2F%D8%A7%D9%84%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF.pdf?alt=media&token=0e07fbbb-07f7-41bd-a4af-524be720818e'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FFifthAppliedElmy%2F%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA.pdf?alt=media&token=cad876b6-7804-4444-856d-3ce2f535246a'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FFifthAppliedElmy%2F%D8%A7%D9%84%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1.pdf?alt=media&token=001529ab-2019-46e5-a9ce-3d96f5dd1c0e'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FFifthAppliedElmy%2F%D8%A7%D9%84%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1.pdf?alt=media&token=72391c90-41a3-4a31-af40-c07d67a4137c'

        },
        title: 'الكيمياء'
      }
    });
    modal.present();
  }

  OpenEarth(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FFifthAppliedElmy%2F%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%B1%D8%B6.pdf?alt=media&token=09dc469e-39a3-429f-8462-9f738b54b177' 

        },
        title: 'علم الأرض'
      }
    });
    modal.present();
  }


}
