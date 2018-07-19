import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstElPage } from './first-el';

@NgModule({
  declarations: [
    FirstElPage,
  ],
  imports: [
    IonicPageModule.forChild(FirstElPage),
  ],
})
export class FirstElPageModule {}
