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
    GalleryPage
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
    GalleryPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
