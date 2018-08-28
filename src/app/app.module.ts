import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, ViewController } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SportsPage } from '../pages/sports/sports';
import { ModalPage } from '../pages/modal/modal';
import { BusinessPage} from '../pages/business/business';
import { TechnologyPage} from '../pages/technology/technology';
import { HealthPage } from '../pages/health/health';
import { SciencePage } from '../pages/science/science';
import { EntertainmentPage } from '../pages/entertainment/entertainment';
import { StartPage } from '../pages/start/start';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsServeProvider } from '../providers/news-serve/news-serve';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SportsPage,
    ModalPage,
    BusinessPage,
    TechnologyPage,
    HealthPage,
    SciencePage,
    EntertainmentPage,
    StartPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SportsPage,
    ModalPage,
    BusinessPage,
    TechnologyPage,
    HealthPage,
    SciencePage,
    EntertainmentPage,
    StartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsServeProvider
  ]
})
export class AppModule {}
