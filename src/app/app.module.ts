import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NavsComponent } from './components/navs/navs.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes:Routes = [
  {path: '', component:CarComponent},
  {path: 'contacts', component:ContactsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ContactsComponent,
    NavsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
