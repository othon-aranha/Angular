import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TribunalListComponent } from './tribunal-list/tribunal-list.component';
import { TribunalFormComponent } from './tribunal-form/tribunal-form.component';

const tribunalRoutes = [
    {path: 'tribunal', component: TribunalListComponent},
    {path: 'tribunal/:id/edit', component: TribunalFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(tribunalRoutes)],
    exports: [RouterModule]
})
export class TribunalRoutingModule {}
