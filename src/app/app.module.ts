import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SlideMenuModule } from 'primeng/primeng';
// import { ListboxModule, MultiSelectModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AuthService } from './service/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ModuloModule } from './modulo/modulo.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModuloModule,
    SlideMenuModule
  ],
  providers: [
    AuthService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
