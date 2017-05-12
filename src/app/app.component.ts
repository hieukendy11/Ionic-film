import {Component, ViewChild} from '@angular/core';
import {MenuController, Nav, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {HomePage} from "../pages/home/home";
import {AboutPage} from "../pages/about/about";
import {ContactPage} from "../pages/contact/contact";
import {FilmListPage} from "../pages/film/film";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any, icon : string}>;

  openPage(page) {
    console.log("page.component:" + page.component)
    this.menuCtl.close()
    this.nav.setRoot(page.component, {type:page.title});


  }

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtl : MenuController) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: '', component: "", icon: '' },
      //Phim item
      { title: 'Phim mới', component: FilmListPage, icon: 'film' },
      { title: 'Phim lẻ', component: FilmListPage, icon: 'film' },
      { title: 'Phim bộ', component: FilmListPage, icon: 'film' },

      { title: '', component: "", icon: '' },
      { title: 'About', component: AboutPage, icon: 'ribbon'},
      { title: 'Contact', component: ContactPage, icon: 'contact' },
      { title: '', component: "", icon: '' },
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


}
