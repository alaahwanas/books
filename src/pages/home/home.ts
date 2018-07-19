import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectStagePage } from '../select-stage/select-stage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToSStage() {
     
    this.navCtrl.push(SelectStagePage);
  }

}
