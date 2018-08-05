import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    UsuarioRoutingModule
  ],
  exports: [],
  declarations: []
})
export class UsuarioModule { }
