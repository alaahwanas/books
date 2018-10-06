import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { ViewPdfPage } from '../view-Pdf/view-Pdf';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the ThirdElPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-third-el',
  templateUrl: 'third-el.html',
})
export class ThirdElPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThirdElPage');
  }




  openKuran(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Fthird%2F%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85.pdf?alt=media&token=0c4f3966-dc74-40be-ae52-7080c12baacb'

        },
        title: 'القراَن الكريم'
      }
    });
    modal.present();
  }


  openKeraa(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Fthird%2F%D9%82%D8%B1%D8%A7%D8%A6%D8%AA%D9%8A.pdf?alt=media&token=ef1b9935-4ea8-402b-a01e-b0ccef4ecc8d'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Fthird%2F%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85.pdf?alt=media&token=312ed932-9894-488f-9bce-51ea4d5cd43b'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Fthird%2F%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D9%86%D8%B4%D8%A7%D8%B7.pdf?alt=media&token=cf6dbb18-140a-401f-b71d-a9247e6863d7'

        },
        title: 'العلوم تمرينات'
      }
    });
    modal.present();
  }

  openMath(): void {
    let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
      displayData: {
        pdfSource: {
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Fthird%2F%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA.pdf?alt=media&token=b78322e6-2b0c-459c-9056-6631b21f80af'

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
          url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Fthird%2F%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%AA%D9%85%D8%B1%D9%8A%D9%86%D8%A7%D8%AA.pdf?alt=media&token=390e1597-b8c5-48db-90c6-b7dedc41e8d2'

        },
        title: 'الرياضيات تمرينات'
      }
    });
    modal.present();
  }

  goTHome() {
    this.navCtrl.push(TabsPage);

  }
}
