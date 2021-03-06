import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ElementryPage } from '../pages/elementry/elementry';
import { MiddlePage } from '../pages/middle/middle';
import { HighPage } from '../pages/high/high';
import { SelectStagePage } from '../pages/select-stage/select-stage';
import { FirstElPage } from '../pages/first-el/first-el';
import { SecondElPage } from '../pages/second-el/second-el';
import { ThirdElPage } from '../pages/third-el/third-el';
import { FourthElPage } from '../pages/fourth-el/fourth-el';
import { FifthElPage } from '../pages/fifth-el/fifth-el';
import { SixthElPage } from '../pages/sixth-el/sixth-el';
import { FirrstmidPage } from '../pages/firrstmid/firrstmid';
import { SecondmidPage } from '../pages/secondmid/secondmid';
import { ThirdmidPage } from '../pages/thirdmid/thirdmid';

import { ElmyPage } from '../pages/elmy/elmy';
import { ForthElmyPage } from '../pages/forth-elmy/forth-elmy';
import { FifthElmyPage } from '../pages/fifth-elmy/fifth-elmy';
import { SixthElmyPage } from '../pages/sixth-elmy/sixth-elmy';

import { AdabyPage } from '../pages/adaby/adaby';
import { ForthAdabyPage } from '../pages/forth-adaby/forth-adaby';
import { FifthAdabyPage } from '../pages/fifth-adaby/fifth-adaby';
import { SixthAdabyPage } from '../pages/sixth-adaby/sixth-adaby';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';


import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ViewPdfPage } from '../pages/view-Pdf/view-Pdf';


import { SigninPage } from '../pages/signin/signin';
import { SingupPage } from '../pages/singup/singup';
import { ProfilePage } from '../pages/profile/profile';
import { ChatPage } from '../pages/chat/chat';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { CommentsProvider } from '../providers/comments/comments';
import { UserProfileUpdatePage } from '../pages/user-profile-update/user-profile-update';
import { AboutPage } from '../pages/about/about';




export const firebaseConfig = {
  apiKey: "AIzaSyD5vQctxCdsMCbHjMyNUGBqt7fG1rnNQWw",
  authDomain: "ionicbooks-af114.firebaseapp.com",
  databaseURL: "https://ionicbooks-af114.firebaseio.com",
  projectId: "ionicbooks-af114",
  storageBucket: "ionicbooks-af114.appspot.com",
  messagingSenderId: "379793939764"
};




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ElementryPage,
    MiddlePage,
    HighPage,
    SelectStagePage,
    FirstElPage,
    SecondElPage,
    ThirdElPage,
    FourthElPage,
    FifthElPage,
    SixthElPage,
    FirrstmidPage,
    SecondmidPage,
    ThirdmidPage,
    ElmyPage,
    ForthElmyPage,
    FifthElmyPage,
    SixthElmyPage,
    AdabyPage,
    ForthAdabyPage,
    FifthAdabyPage,
    SixthAdabyPage,
    ViewPdfPage,
    SigninPage,
    SingupPage,
    ProfilePage,
    ChatPage,
    TabsPage,
    UserProfileUpdatePage,
    AboutPage

  ],
  imports: [
    BrowserModule, PdfViewerModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '' }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomePage,
    ElementryPage,
    MiddlePage,
    HighPage,
    SelectStagePage,
    FirstElPage,
    SecondElPage,
    ThirdElPage,
    FourthElPage,
    FifthElPage,
    SixthElPage,
    FirrstmidPage,
    SecondmidPage,
    ThirdmidPage,
    ElmyPage,
    ForthElmyPage,
    FifthElmyPage,
    SixthElmyPage,
    AdabyPage,
    ForthAdabyPage,
    FifthAdabyPage,
    SixthAdabyPage,
    ViewPdfPage,
    SigninPage,
    SingupPage,
    ProfilePage,
    ChatPage,
    TabsPage,
    UserProfileUpdatePage,
    AboutPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,

    { provide: ErrorHandler, useClass: IonicErrorHandler },
    InAppBrowser,
    AuthServiceProvider,
    AngularFireAuth,
    UserServiceProvider,
    CommentsProvider,
    UserServiceProvider
   
  ]
})
export class AppModule {}
