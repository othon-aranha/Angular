import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioAreaRoutingModule } from './usuario-area-routing.module';
import { UsuarioAreaFormComponent } from './usuario-area-form/usuario-area-form.component';
import { UsuarioAreaListComponent } from './usuario-area-list/usuario-area-list.component';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../../shared/shared.module';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  declarations: [UsuarioAreaFormComponent, UsuarioAreaListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    TabViewModule,
    TableModule,
    SharedModule
  ]
})
export class UsuarioAreaModule { }
