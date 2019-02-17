import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoListComponent } from './grupo-list/grupo-list.component';
import { GrupoFormComponent } from './grupo-form/grupo-form.component';

@NgModule({
  declarations: [GrupoListComponent, GrupoFormComponent],
  imports: [
    CommonModule,
    GrupoRoutingModule
  ]
})
export class GrupoModule { }
