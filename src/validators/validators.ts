import { AbstractControl, FormControl } from '@angular/forms';

export class MyValidators{

  static passwordMatcher(c: AbstractControl) {
		if(c.get('password').value === c.get('repeatPassword').value){
			return null;
		} else{
			return {'nomatch': true}
		}
	}

	static age(control: FormControl){
		let age = control.value;
		if(age >= 18){
			return null;
		}
		return {'young': true}
	}
}