import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { ViewPdfPage } from '../view-Pdf/view-Pdf';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SecondElPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second-el',
  templateUrl: 'second-el.html',
})
export class SecondElPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondElPage');
  }


  openKuran(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Fsecond%2F%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85.pdf?alt=media&token=98943207-8405-451c-b280-c823b9a33288'

        },
        title: 'القران الكريم والتربية الاسلامية'
      }
    });
    modal.present();
  }


  openKeraa(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Fsecond%2F%D9%82%D8%B1%D8%A7%D8%A6%D8%AA%D9%8A.pdf?alt=media&token=216b3018-03ba-4300-bb17-6c081c357dcd'

        },
        title: 'قراءتي'
      }
    });
    modal.present();
  }





  openElom(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Fsecond%2F%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85.pdf?alt=media&token=06e2789f-ad3c-4c31-bb04-fd2c632b5804'

        },
        title: 'العلوم'
      }
    });
    modal.present();
  }

  openElomPractice(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Fsecond%2F%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D9%86%D8%B4%D8%A7%D8%B7.pdf?alt=media&token=b0fa69fb-3dca-43ad-a4ef-5793b8976cbe'

        },
        title: ' العلوم تمرينات'
      }
    });
    modal.present();
  }

  openMath(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Fsecond%2F%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA.pdf?alt=media&token=9733d8f5-cabd-485b-94fc-acbd3b689cd6'

        },
        title: 'الرياضيات'
      }
    });
    modal.present();
  }


  openMathpractice(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Fsecond%2F%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%AA%D9%85%D8%B1%D9%8A%D9%86%D8%A7%D8%AA.pdf?alt=media&token=cbf9fe0c-b940-4e79-801f-305cc8b7cd0c'

        },
        title: ' الرياضيات تمرينات'
      }
    });
    modal.present();
  }

  goTHome() {
    this.navCtrl.setRoot(TabsPage);

  }

}
