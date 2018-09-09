import { TribunalRoutingModule } from './tribunal.routing.module';
import { NgModule } from '@angular/core';
import { MatInputModule, MatSelectModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { TribunalComponent } from './tribunal.component';
import { TribunalListComponent } from './tribunal-list/tribunal-list.component';
import { TribunalService } from '../service/tribunal.service';

@NgModule({
  imports: [
    CommonModule,
    TribunalRoutingModule
  ],
  declarations: [TribunalComponent, TribunalListComponent],
  providers: [TribunalService]
})
export class TribunalModule { }
