import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SlideMenuModule } from 'primeng/primeng';
import { ListboxModule, MultiSelectModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AuthService } from './service/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
<<<<<<< HEAD
=======
import { ModuloListComponent } from './modulo/modulo-list/modulo-list.component';
import { ModuloService } from './service/modulo.service';
>>>>>>> f628028ff05876d80a1c6d3d5fe2da0352c2ce91
import { ServidorService } from './service/servidor.service';
import { ManutencaoService } from './service/manutencao.service';
import { ServidorListComponent } from './servidor-list/servidor-list.component';
// import { TipoAplicacaoMultiComponent } from './tipo-aplicacao-multi/tipo-aplicacao-multi.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { AuthService } from './service/auth.service';
import { MenuComponent } from './menu/menu.component';
=======
import { AuthGuard } from './guards/auth.guard';

>>>>>>> f628028ff05876d80a1c6d3d5fe2da0352c2ce91

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
<<<<<<< HEAD
    LoginComponent,
    MenuComponent,
    ServidorListComponent
=======
    ModuloListComponent,
    ModuloCadastroComponent,
    ServidorListComponent,
    TipoAplicacaoMultiComponent,
    LoginComponent
>>>>>>> f628028ff05876d80a1c6d3d5fe2da0352c2ce91
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
<<<<<<< HEAD
=======
    AuthGuard,
    ModuloService,
>>>>>>> f628028ff05876d80a1c6d3d5fe2da0352c2ce91
    ServidorService,
    ManutencaoService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
