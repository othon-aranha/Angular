import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatusMultiComponent } from '../status-multi/status-multi.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    StatusMultiComponent,
    UsuarioRoutingModule
  ],
  exports: [],
  declarations: []
})
export class UsuarioModule { }
