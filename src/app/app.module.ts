import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DataTableModule, ButtonModule, InputTextModule, InputMaskModule, CalendarModule } from 'primeng/primeng';
import {InputSwitchModule} from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModuloComponent } from './modulo/modulo.component';
import { ModuloService } from './modulo.service';
import { ModuloCadastroComponent } from './modulo-cadastro/modulo-cadastro.component';
import { ServidorListComponent } from './servidor-list/servidor-list.component';
import { TipoAplicacaoMultiComponent } from './tipo-aplicacao-multi/tipo-aplicacao-multi.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModuloComponent,
    ModuloCadastroComponent,
    ServidorListComponent,
    TipoAplicacaoMultiComponent,
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
    TableModule
  ],
  providers: [
    ModuloService,
    TipoAplicacaoMultiComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
