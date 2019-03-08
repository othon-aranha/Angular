import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AliasListComponent } from './alias-list/alias-list.component';
import { AliasFormComponent } from './alias-form/alias-form.component';

const aliasRoutes = [
    {path: 'alias', component: AliasListComponent},
    {path: 'alias/new', component: AliasFormComponent},
    {path: 'alias/:id/tribunal/:idtribunal/edit', component: AliasFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(aliasRoutes)],
    exports: [RouterModule]
})
export class AliasRoutingModule {
}
