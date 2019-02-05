import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AliasListComponent } from './alias-list/alias-list.component';
import { AliasFormComponent } from './alias-form/alias-form.component';

const aliasRoutes = [
    {path: 'alias', component: AliasListComponent},
    {path: 'dominio/new', component: AliasFormComponent},
    {path: 'dominio/:id/edit', component: AliasFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(aliasRoutes)],
    exports: [RouterModule]
})
export class AliasRoutingModule {
}
