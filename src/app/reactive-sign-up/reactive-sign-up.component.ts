import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { UserService } from '../user.service';
@Component({
  selector: 'app-reactive-sign-up',
  templateUrl: './reactive-sign-up.component.html',
  styleUrls: ['./reactive-sign-up.component.css']
})
export class ReactiveSignUpComponent implements OnInit {

  private genderList: string[] = ["Male", "Female", "Transgender"];
  private signUpForm: FormGroup;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required, forbiddenNameValidator('Bharat')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('[A-Z0-9]*')]),
      confirmPassword: new FormControl(),
      gender: new FormControl('Male', [Validators.required]),
      agree: new FormControl(),
    })
  }

  signUp() {
    //this.userService.regsiterUser(this.signUpForm.value)
    alert(JSON.stringify(this.signUpForm.value));
  }

}
export function forbiddenNameValidator(nameRe: String): ValidatorFn | AsyncValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRe === control.value;
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}
