import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Nacionalidades',
      url: '/nacionalidades',
      icon: 'flag'
    },
    {
      title: 'Instituciones',
      url: '/instituciones-del-sistema',
      icon: 'man'
    },
    {
      title: 'Grupos Prioritarios',
      url: '/grupos-priorizarios',
      icon: 'people'
    },
    {
      title: 'Contaminacion Suelo',
      url: '/contaminacion-suelo',
      icon: 'nuclear'
    },
    {
      title: 'Contaminacion Aire',
      url: '/contaminacion-aire',
      icon: 'thunderstorm'
    },
    {
      title: 'Contaminacion Agua',
      url: '/contaminacion-agua',
      icon: 'water'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
