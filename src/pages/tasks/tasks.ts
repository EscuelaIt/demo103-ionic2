import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { TasksService } from '../../providers/tasks-service';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {

  tasks: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tasksService: TasksService,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    this.getAllTasks();
  }

  createTask(){
    let prompt = this.alertCtrl.create({
      title: 'Crear nueva tarea',
      message: "Digite la nueva tarea",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Crear',
          handler: data => {
            let task = {
              "userId": 1,
              "title": data.title,
              "completed": false
            }
            this.tasksService.create( task )
            .then(data =>{
              this.tasks.unshift( data );
            })
          }
        }
      ]
    });
    prompt.present();
  }

  editTask(task){
    task.completed = true;
    task.title = 'nuevo titulo';
    this.tasksService.update(task)
    .then(data => {
      console.log(data);
    })
  }

  deleteTask(task, index){
    console.log(index);
    this.tasksService.delete(task.id)
    .then(data => {
      this.tasks.splice(index,1);
    })
  }

  private getAllTasks(){
    this.tasksService.getAll()
    .then((tasks: any[]) =>{
      this.tasks = tasks;
    })
  }

}
