import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private genderList: string[] = ["Male", "Female", "Transgender"];
  private user: User;
  constructor() { }

  ngOnInit() {
    this.user = new User({gender: 'Male', password: {password: "", confirmPassword: ""}});
  }
  signUp(form: NgForm) {
    console.log(form.valid);
    console.log(form.value);
  }

}
