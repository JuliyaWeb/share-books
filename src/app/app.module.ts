import { NgModule, ErrorHandler, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CookieModule } from 'ngx-cookie';
import { MyApp } from './app.component';
// FireBase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from "../core/config/config";
import { FirebaseService } from '../core/helpers/firebase-service';
// App Pages
import { APP_PAGES } from '../pages/index';
// Providers
import { Session } from "../core/auth/session";
import { AuthService } from "../core/auth/auth.service";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from "../components/components.module";



@NgModule({
  declarations: [
    MyApp,
    ...APP_PAGES
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AngularFireDatabaseModule,
    CookieModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ...APP_PAGES,
  ],
  providers: [
    Session,
    AuthService,
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    FirebaseService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
