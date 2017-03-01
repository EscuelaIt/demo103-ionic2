import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { RegisterPage } from '../pages/register/register';
import { InvitePage } from '../pages/invite/invite';
import { EventDetailPage } from '../pages/event-detail/event-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TutorialPage,
    RegisterPage,
    InvitePage,
    EventDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TutorialPage,
    RegisterPage,
    InvitePage,
    EventDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
