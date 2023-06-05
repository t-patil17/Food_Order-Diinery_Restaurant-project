import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FoodComponent } from './menu/food/food.component';
import { DessertsComponent } from './menu/desserts/desserts.component';

import { ShopingcartComponent } from './shopingcart/shopingcart.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';

const routes: Routes = [
  {
    path:"home" , component:HomeComponent, 
  },
  {
    path:"" , component:LoginComponent, 
  },
  {
    path:"header", component:HeaderComponent,
  }, 
  {
    path:"menu",component:MenuComponent,
  },
  
 
  {
    path:"menu/desserts" , component:DessertsComponent ,
  },
  {
    path:"parent", component:ParentComponent,
  },
  {
    path:"parent/child", component:ChildComponent,
  },

  {
    path:"menu/food" , component:FoodComponent,
  },

  {
    path:"about", component:AboutComponent,
  },
  {
    path:"contact", component:ContactComponent,
  },
  {
    path:"login", component:LoginComponent,
  },
  {
    path:"shopingcart" , component:ShopingcartComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
