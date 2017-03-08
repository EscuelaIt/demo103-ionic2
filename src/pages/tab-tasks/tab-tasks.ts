import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { TasksPage } from '../tasks/tasks'
import { TasksDonePage } from '../tasks-done/tasks-done'

@Component({
  selector: 'page-tab-tasks',
  templateUrl: 'tab-tasks.html'
})
export class TabTasksPage {

  tab1Root: any = TasksPage;
  tab2Root: any = TasksDonePage;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true, 'admin');
  }

}