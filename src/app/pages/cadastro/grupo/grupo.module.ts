import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoListComponent } from './grupo-list/grupo-list.component';
import { GrupoFormComponent } from './grupo-form/grupo-form.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [GrupoListComponent, GrupoFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    GrupoRoutingModule
  ]
})
export class GrupoModule { }
