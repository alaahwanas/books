import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondElPage } from './second-el';

@NgModule({
  declarations: [
    SecondElPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondElPage),
  ],
})
export class SecondElPageModule {}
