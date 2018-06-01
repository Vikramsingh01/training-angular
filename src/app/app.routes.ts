import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { BlogComponent } from './blog/blog.component';
import { RegisterRoutes } from "./register/register.routes";
import { ProductRoutes } from "./product/product.routes";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product', children: ProductRoutes },
    { path: 'register', component: RegisterComponent, children: RegisterRoutes },
    { path: 'blog', component: BlogComponent }
  ]