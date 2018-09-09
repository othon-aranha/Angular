import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DataTableModule, ButtonModule, PanelModule, InputTextModule, InputMaskModule, CalendarModule } from 'primeng/primeng';
import { InputSwitchModule } from 'primeng/inputswitch';
import { PasswordModule } from 'primeng/password';
import { PaginatorModule } from 'primeng/paginator';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ManutencaoService } from './service/manutencao.service';
import { AuthService } from './service/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { DominioModule } from './dominio/dominio.module';
import { ModuloModule } from './modulo/modulo.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TribunalModule } from './tribunal/tribunal.module';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    DataTableModule,
    InputMaskModule,
    InputTextModule,
    InputSwitchModule,
    HttpClientModule,
    ListboxModule,
    PaginatorModule,
    PanelModule,
    PasswordModule,
    RadioButtonModule,
    ReactiveFormsModule,
    SlideMenuModule,
    ModuloModule,
    DominioModule,
    UsuarioModule,
    TribunalModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    ManutencaoService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
