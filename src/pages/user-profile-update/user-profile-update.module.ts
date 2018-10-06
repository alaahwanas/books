import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserProfileUpdatePage } from './user-profile-update';

@NgModule({
  declarations: [
    UserProfileUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(UserProfileUpdatePage),
  ],
})
export class UserProfileUpdatePageModule {}
