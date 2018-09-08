import { TribunalRoutingModule } from './tribunal.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TribunalComponent } from './tribunal.component';
import { TribunalListComponent } from './tribunal-list/tribunal-list.component';

@NgModule({
  imports: [
    CommonModule,
    TribunalRoutingModule
  ],
  declarations: [TribunalComponent, TribunalListComponent]
})
export class TribunalModule { }
