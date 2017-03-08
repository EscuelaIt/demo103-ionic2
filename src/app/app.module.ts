import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { RegisterPage } from '../pages/register/register';
import { InvitePage } from '../pages/invite/invite';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { EventsPage } from '../pages/events/events';
import { MyEventsPage } from '../pages/my-events/my-events';
import { PastEventsPage } from '../pages/past-events/past-events';
import { GalleryPage } from '../pages/gallery/gallery';
import { UsersPage } from '../pages/users/users';
import { LoginPage } from '../pages/login/login';

import { UserService } from '../providers/user-service';
import { TasksService } from '../providers/tasks-service';
import { TasksServiceStorage } from '../providers/tasks-service-storage';
import { TasksServiceFirebase } from '../providers/tasks-service-firebase';
import { AuthService} from '../providers/auth-service';

import { TabTasksPage } from '../pages/tab-tasks/tab-tasks';
import { TasksPage } from '../pages/tasks/tasks';
import { TasksDonePage } from '../pages/tasks-done/tasks-done';

import { Storage } from '@ionic/storage';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

const firebaseConfig = {
  apiKey: "AIzaSyC99HZB7tlvoLxB15FOvA0YpDAiqEKohNs",
  authDomain: "todosapp-edee7.firebaseapp.com",
  databaseURL: "https://todosapp-edee7.firebaseio.com",
  storageBucket: "todosapp-edee7.appspot.com",
  messagingSenderId: "294127527512"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

const config = {
  tabsHideOnSubPages: true,
  tabsPlacement: 'top',
  platforms: {
    ios: {
      tabsHideOnSubPages: false,
    },
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TutorialPage,
    RegisterPage,
    InvitePage,
    EventDetailPage,
    ProfilePage,
    SettingsPage,
    TabsPage,
    EventsPage,
    MyEventsPage,
    PastEventsPage,
    GalleryPage,
    UsersPage,
    TabTasksPage,
    TasksPage,
    TasksDonePage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, config),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TutorialPage,
    RegisterPage,
    InvitePage,
    EventDetailPage,
    ProfilePage,
    SettingsPage,
    TabsPage,
    EventsPage,
    MyEventsPage,
    PastEventsPage,
    GalleryPage,
    UsersPage,
    TabTasksPage,
    TasksPage,
    TasksDonePage,
    LoginPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage,
    UserService,
    TasksService,
    TasksServiceStorage,
    AuthService,
    TasksServiceFirebase
  ]
})
export class AppModule {}
