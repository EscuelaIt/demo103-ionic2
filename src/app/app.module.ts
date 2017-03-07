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

import { UserService } from '../providers/user-service';
import { TasksService } from '../providers/tasks-service';

import { TabTasksPage } from '../pages/tab-tasks/tab-tasks';
import { TasksPage } from '../pages/tasks/tasks';
import { TasksDonePage } from '../pages/tasks-done/tasks-done';


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
    TasksDonePage
  ],
  imports: [
    IonicModule.forRoot(MyApp, config)
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
    TasksDonePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    TasksService
  ]
})
export class AppModule {}
