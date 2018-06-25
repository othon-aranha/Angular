import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SlideMenuModule } from 'primeng/primeng';
import { ListboxModule, MultiSelectModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServidorService } from './service/servidor.service';
import { ManutencaoService } from './service/manutencao.service';
import { ServidorListComponent } from './servidor-list/servidor-list.component';
// import { TipoAplicacaoMultiComponent } from './tipo-aplicacao-multi/tipo-aplicacao-multi.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    ServidorListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ListboxModule,
    MultiSelectModule,
    SlideMenuModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    ServidorService,
    ManutencaoService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
