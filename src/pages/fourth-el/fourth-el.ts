import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { ViewPdfPage } from '../view-Pdf/view-Pdf';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the FourthElPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fourth-el',
  templateUrl: 'fourth-el.html',
})
export class FourthElPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FourthElPage');
  }

  openKuranForthEl(): void {
  let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
    displayData: {
      pdfSource: {
        url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffourth%2F%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86.pdf?alt=media&token=ec92500f-1959-46ad-bb74-b1b83f799394'

      },
      title: 'القراَن الكريم'
    }
  });
  modal.present();
}

openKeraaForthEl(): void {
  let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
    displayData: {
      pdfSource: {
        url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffourth%2F%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%A1%D8%A9.pdf?alt=media&token=fee32931-e468-4dbf-a757-1065cc270221'

      },
      title: 'القراءة العربية'
    }
  });
  modal.present();
}





openElomForthEl(): void {
  let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
    displayData: {
      pdfSource: {
        url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffourth%2F%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85.pdf?alt=media&token=a1e204f8-440f-4e94-af38-e6a0e5abcc60'

      },
      title: 'العلوم'
    }
  });
  modal.present();
}

openElomPracticeForthEl(): void {
  let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
    displayData: {
      pdfSource: {
        url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffourth%2F%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D9%86%D8%B4%D8%A7%D8%B7.pdf?alt=media&token=84ddc094-b64c-4c3e-a8b0-928e68a90d80'

      },
      title: 'العلوم تمرينات'
    }
  });
  modal.present();
}

openMathForthEl(): void {
  let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
    displayData: {
      pdfSource: {
        url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffourth%2F%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA.pdf?alt=media&token=41d9fdfb-bfdf-49f2-8236-4137fb087394'

      },
      title: 'الرياضيات'
    }
  });
  modal.present();
}


openSocialForthEl(): void {
  let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
    displayData: {
      pdfSource: {
        url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffourth%2F%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A7%D8%AA.pdf?alt=media&token=94136573-cafd-4989-8dca-6fb3a59871f4'

      },
      title: 'الأجتماعيات'
    }
  });
  modal.present();
}


openQawaedForthEl(): void {
  let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
    displayData: {
      pdfSource: {
        url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffourth%2F%D9%82%D9%88%D8%A7%D8%B9%D8%AF.pdf?alt=media&token=704bd51a-c896-4247-a2ec-bde4cfa66e8c'

      },
      title: 'قواعد اللغة العربية'
    }
  });
  modal.present();
}


openEnglish(): void {
  let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
    displayData: {
      pdfSource: {
        url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffourth%2F%D8%A7%D9%84%D8%A7%D9%86%D9%83%D9%84%D9%8A%D8%B2%D9%8A.pdf?alt=media&token=e0e3f62b-664c-4e0c-b357-d0fd002bb1ea'

      },
      title: 'اللغة الانكليزية'
    }
  });
  modal.present();
}


openEnghlishPractice(): void {
  let modal: Modal = this.modalCtrl.create(ViewPdfPage, {
    displayData: {
      pdfSource: {
        url: 'https://firebasestorage.googleapis.com/v0/b/ionicbooks-af114.appspot.com/o/elementry%2Ffourth%2F%D8%A7%D9%84%D8%A7%D9%86%D9%83%D9%84%D9%8A%D8%B2%D9%8A%20%D9%86%D8%B4%D8%A7%D8%B7.pdf?alt=media&token=36c82a34-abc0-437e-8938-4f6223521bd0'

      },
      title: 'اللغة الانكليزية نشاط'
    }
  });
  modal.present();
}


  goTHome() {
    this.navCtrl.push(TabsPage);

  }

}
