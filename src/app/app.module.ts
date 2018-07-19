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
import { DocumentViewer } from '@ionic-native/document-viewer';
import { FileOpener } from '@ionic-native/file-opener';






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
    ThirdmidPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)    

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
    ThirdmidPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DocumentViewer,
    FileOpener
  ]
})
export class AppModule {}
