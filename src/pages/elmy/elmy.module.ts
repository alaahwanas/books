import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElmyPage } from './elmy';

@NgModule({
  declarations: [
    ElmyPage,
  ],
  imports: [
    IonicPageModule.forChild(ElmyPage),
  ],
})
export class ElmyPageModule {}
