import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DessertsComponent } from './menu/desserts/desserts.component';
import { FoodComponent } from './menu/food/food.component';
import { FooterComponent } from './footer/footer.component';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { ShopingcartComponent } from './shopingcart/shopingcart.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    DessertsComponent,
    FoodComponent,
    FooterComponent,
    ShopingcartComponent,
    ParentComponent,
    ChildComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
