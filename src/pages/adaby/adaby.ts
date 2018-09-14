import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { ViewPdfPage } from '../view-Pdf/view-Pdf';
/**
 * Generated class for the AdabyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adaby',
  templateUrl: 'adaby.html',
})
export class AdabyPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdabyPage');
  }


  OpenQuran(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FFifthElmyBio%2F%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85.pdf?alt=media&token=dd7b44de-8bab-40d5-aa34-fa1e750be18d'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FFifthElmyBio%2F%D8%A7%D9%84%D8%A7%D8%AF%D8%A8%20%D9%88%D8%A7%D9%84%D9%86%D8%B5%D9%88%D8%B5.pdf?alt=media&token=bf468f7a-c5eb-4403-8e1d-37940219e0d7'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FFifthElmyBio%2F%D9%82%D9%88%D8%A7%D8%B9%D8%AF%20%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9.pdf?alt=media&token=f07b5a02-7fcb-420c-9589-aa36248bd832'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FFifthElmyBio%2F%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%AD%D9%8A%D8%A7%D8%A1.pdf?alt=media&token=3916e040-c0e2-4ed0-bb77-18c7b7117d85'

        },
        title: 'الأحياء'
      }
    });
    modal.present();
  }

  OpenMath(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FFifthElmyBio%2F%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA.pdf?alt=media&token=6b6782be-4b6e-4a03-8e3a-9b7bf3a9eece'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FFifthElmyBio%2F%D8%A7%D9%84%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1.pdf?alt=media&token=7a665749-271d-4c8b-a27a-7224c671347b'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/high%2FFifthElmyBio%2F%D8%A7%D9%84%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1.pdf?alt=media&token=f3258581-27d6-432c-9744-a9f4922be88d'

        },
        title: 'الكيمياء'
      }
    });
    modal.present();
  }


}
