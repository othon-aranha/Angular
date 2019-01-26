import { TribunalRoutingModule } from './tribunal.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TribunalComponent } from './tribunal.component';
import { TribunalListComponent } from './tribunal-list/tribunal-list.component';
import { TribunalService } from '../../service/tribunal.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { GrowlModule, ContextMenuModule, DropdownModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ContextMenuModule,
    FormsModule,
    GrowlModule,
    ReactiveFormsModule,
    DropdownModule,
    TableModule,
    TribunalRoutingModule
  ],
  declarations: [TribunalComponent, TribunalListComponent],
  providers: [TribunalService]
})
export class TribunalModule { }
