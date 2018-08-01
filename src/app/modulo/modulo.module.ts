import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloRoutingModule } from './modulo.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioService } from '../service/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ModuloRoutingModule
  ],
  exports: [UsuarioService],
  declarations: []
})
export class ModuloModule { }
