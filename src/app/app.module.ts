import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { FooterComponent } from './footer/footer.component';
import { OrderComponent } from './order/order.component';
import { AppBoldDirective } from './app-bold.directive';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveSignUpComponent } from './reactive-sign-up/reactive-sign-up.component';
import { UserService } from './user.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { HttpModule } from '@angular/http';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { PricePipe } from './price.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftPanelComponent,
    FooterComponent,
    OrderComponent,
    AppBoldDirective,
    HomeComponent,
    ProductComponent,
    RegisterComponent,
    BlogComponent,
    SignUpComponent,
    SignInComponent,
    ReactiveSignUpComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    PricePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
