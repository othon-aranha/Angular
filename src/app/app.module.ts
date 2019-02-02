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
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { ManutencaoService } from './service/manutencao.service';
import { AuthService } from './service/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { DominioModule } from './pages/dominio/dominio.module';
import { ModuloModule } from './pages/modulo/modulo.module';
import { UsuarioModule } from './pages/usuario/usuario.module';
import { TribunalModule } from './pages/tribunal/tribunal.module';
import { BarraNavegacaoComponent } from './pages/shared/barra-navegacao/barra-navegacao.component';
import { BaseResourceFormComponent } from './shared/components/base-resource-form/base-resource-form.component';
import { FormFieldErrorComponent } from './shared/components/form-field-error/form-field-error.component';
import { ServerErrorMessagesComponent } from './shared/components/server-error-messages/server-error-messages.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    BarraNavegacaoComponent,
    AppComponent,
    ServerErrorMessagesComponent
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
    SharedModule,
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
