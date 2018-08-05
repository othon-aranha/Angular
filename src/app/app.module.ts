import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DataTableModule, ButtonModule, PanelModule, InputTextModule, InputMaskModule, CalendarModule } from 'primeng/primeng';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { PasswordModule } from 'primeng/password';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule} from 'primeng/contextmenu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModuloListComponent } from './modulo/modulo-list.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { ServidorListComponent } from './servidor-list/servidor-list.component';
import { TipoAplicacaoMultiComponent } from './tipo-aplicacao-multi/tipo-aplicacao-multi.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


import { ModuloService } from './service/modulo.service';
import { ServidorService } from './service/servidor.service';
import { ManutencaoService } from './service/manutencao.service';
import { AuthService } from './service/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { TipoUsuarioMultiComponent } from './tipo-usuario-multi/tipo-usuario-multi.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ModuloListComponent,
    UsuarioListComponent,
    ServidorListComponent,
    TipoAplicacaoMultiComponent,
    TipoUsuarioMultiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    ContextMenuModule,
    DataTableModule,
    DialogModule,
    DropdownModule,
    InputMaskModule,
    InputTextModule,
    InputSwitchModule,
    HttpClientModule,
    ListboxModule,
    MatDialogModule,
    MultiSelectModule,
    PaginatorModule,
    PanelModule,
    PasswordModule,
    RadioButtonModule,
    SlideMenuModule,
    TableModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    ModuloService,
    ServidorService,
    ServidorListComponent,
    ManutencaoService,
    TipoAplicacaoMultiComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
