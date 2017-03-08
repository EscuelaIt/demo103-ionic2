import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

import { InvitePage } from '../invite/invite';
import { TutorialPage } from '../tutorial/tutorial';

import { MyValidators } from '../../validators/validators';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  myPage = TutorialPage;
  registerForm: FormGroup;
  newUser: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    public authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      'email': [''],
      'name': ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{1,}$/)]],
      'nickname': ['', [Validators.required, Validators.maxLength(8)]],
      'lastname': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      'age': ['', [Validators.required, MyValidators.age]],
      'serie': [''],
      'children': [''],
      'date': [''],
      'language': [''],
      'passwordGroup': this.fb.group({
        'password': ['', [Validators.required]],
        'repeatPassword': ['', [Validators.required]],
      }, { validator:  MyValidators.passwordMatcher})
    })

    let user = {
      name: 'nicolas',
      nickname: 'nicobytes',
      serie: '4',
      age: 23
    };

    this.registerForm.patchValue(user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  goToInvitePage(){
    this.navCtrl.push( InvitePage );
  }

  goToTutorialPage(){
    this.navCtrl.push( TutorialPage );
  }

  goToBack(){
    this.navCtrl.pop();
  }

  saveData(){
    if(this.registerForm.valid){
      console.log( this.registerForm.value );
      let email = this.registerForm.value.email;
      let password = this.registerForm.value.passwordGroup.repeatPassword;
      this.authService.register(email, password);
    }
  }

}
