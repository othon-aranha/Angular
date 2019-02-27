import { TribunalRoutingModule } from './tribunal.routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatInputModule, MatSelectModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { TribunalListComponent } from './tribunal-list/tribunal-list.component';
import { TribunalService } from '../../../service/tribunal.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { GrowlModule, ContextMenuModule } from 'primeng/primeng';
import { TribunalFormComponent } from './tribunal-form/tribunal-form.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ContextMenuModule,
    FormsModule,
    GrowlModule,
    ReactiveFormsModule,
    SharedModule,
    TableModule,
    TribunalRoutingModule
  ],
  declarations: [TribunalFormComponent,  TribunalListComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  providers: [TribunalService]
})
export class TribunalModule { }
