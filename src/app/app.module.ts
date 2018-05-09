import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableModule, ButtonModule, InputTextModule, InputMaskModule, CalendarModule } from 'primeng/primeng';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { ListboxModule } from 'primeng/listbox';
import { MenuItem } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule} from 'primeng/contextmenu';
// import { MenubarModule } from 'primeng/menubar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuthService } from './service/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ModuloListComponent } from './modulo/modulo-list/modulo-list.component';
import { ModuloService } from './service/modulo.service';
import { ServidorService } from './service/servidor.service';
import { ManutencaoService } from './service/manutencao.service';
import { ModuloCadastroComponent } from './modulo-cadastro/modulo-cadastro.component';
import { ServidorListComponent } from './servidor-list/servidor-list.component';
import { TipoAplicacaoMultiComponent } from './tipo-aplicacao-multi/tipo-aplicacao-multi.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ModuloListComponent,
    ModuloCadastroComponent,
    ServidorListComponent,
    TipoAplicacaoMultiComponent,
    LoginComponent
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
    MultiSelectModule,
    PaginatorModule,
    RadioButtonModule,
    SlideMenuModule,
    TableModule,
    // MenubarModule,
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
