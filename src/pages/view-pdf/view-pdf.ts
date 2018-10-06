import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the ViewPdfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-pdf',
  templateUrl: 'view-pdf.html',
})
export class ViewPdfPage {
  displayData: any = {};
  pdfshow: boolean = true;
  
  
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

 

 


  ionViewDidLoad() {
    console.log(this.navParams);

    this.displayData = this.navParams.get('displayData');
  }

 
 
 
  dismiss(): void {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  goTHome() {
    this.navCtrl.push(TabsPage);

  }
  
}
