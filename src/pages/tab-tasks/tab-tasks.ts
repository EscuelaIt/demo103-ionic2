import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TasksPage } from '../tasks/tasks'
import { TasksDonePage } from '../tasks-done/tasks-done'

/*
  Generated class for the TabTasks tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-tab-tasks',
  templateUrl: 'tab-tasks.html'
})
export class TabTasksPage {

  tab1Root: any = TasksPage;
  tab2Root: any = TasksDonePage;

  constructor(public navCtrl: NavController) {

  }

}