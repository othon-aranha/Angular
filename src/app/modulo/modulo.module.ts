import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { GrowlModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TipoAplicacaoMultiComponent } from '../tipo-aplicacao-multi/tipo-aplicacao-multi.component';


@NgModule({
    imports: [
        CommonModule,
        GrowlModule,
        ContextMenuModule,
        DialogModule,
        DropdownModule,
        InputTextModule,
        InputSwitchModule,
        TableModule
    ],
    exports: [],
    declarations: [TipoAplicacaoMultiComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ModuloModule { }
