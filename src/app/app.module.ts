import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CounterInputComponent } from './component/counter-input/counter-input.component';
import { AlcoholComponent } from './component/alcohol/alcohol.component';
import { DessertsComponent } from './component/desserts/desserts.component';
import { HotDrinksComponent } from './component/hot-drinks/hot-drinks.component';
import { NonAlcoholicComponent } from './component/non-alcoholic/non-alcoholic.component';
import { PizzaComponent } from './component/pizza/pizza.component';
import { SaladComponent } from './component/salad/salad.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { ImagesComponent } from './component/images/images.component';
import { BackgroundImagesComponent } from './component/background-images-left/background-images.component';
import { BackgroundImagesRightComponent } from './component/background-images-right/background-images-right.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { MenuComponent } from './component/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterInputComponent,
    AlcoholComponent,
    DessertsComponent,
    HotDrinksComponent,
    NonAlcoholicComponent,
    PizzaComponent,
    SaladComponent,
    HotDrinksComponent,
    ImagesComponent,
    BackgroundImagesComponent,
    BackgroundImagesRightComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'menu', component: MenuComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
    AppRoutingModule,
    ReactiveFormsModule,
    ScrollingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
