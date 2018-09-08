import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TribunalListComponent } from './tribunal-list/tribunal-list.component';

const tribunalRoutes = [
    {path: 'tribunal-list', component: TribunalListComponent},
    {path: 'tribunal', component: TribunalComponent},
    {path: 'tribunal/:id', component: TribunalComponent}
];

@NgModule({
    imports: [RouterModule.forChild(tribunalRoutes)],
    exports: [RouterModule]
})
export class TribunalRoutingModule {}
