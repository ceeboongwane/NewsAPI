import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SportsPage } from '../pages/sports/sports'
import { BusinessPage} from '../pages/business/business';
import { TechnologyPage} from '../pages/technology/technology';
import { HealthPage } from '../pages/health/health';
import { SciencePage } from '../pages/science/science';
import { EntertainmentPage } from '../pages/entertainment/entertainment';
import { StartPage } from '../pages/start/start';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = StartPage;
  activePage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Top Stories', component: HomePage },
      { title: 'Sports', component: SportsPage },
      { title: 'Business', component: BusinessPage },
      { title: 'Technology', component: TechnologyPage },
      { title: 'Sience', component: SciencePage },
      { title: 'Entertainmennt', component: EntertainmentPage },
      { title: 'Health', component: HealthPage }
    ];

    this.activePage = this.pages[0];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  checkActive(page){
    return page == this.activePage;
  }
}
