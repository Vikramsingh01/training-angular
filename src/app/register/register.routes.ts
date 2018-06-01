import { Routes } from "@angular/router";
import { SignUpComponent } from "../sign-up/sign-up.component";
import { SignInComponent } from "../sign-in/sign-in.component";
import { ReactiveSignUpComponent } from "../reactive-sign-up/reactive-sign-up.component";

export const RegisterRoutes: Routes = [
    { path: 'sign-up', component: SignUpComponent },
    { path: 'reactive-sign-up', component: ReactiveSignUpComponent },
    { path: 'sign-in', component: SignInComponent }
  ]