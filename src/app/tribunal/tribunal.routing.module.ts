import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TribunalListComponent } from './tribunal-list/tribunal-list.component';
import { TribunalComponent } from './tribunal.component';

const tribunalRoutes = [
    {path: 'tribunal', component: TribunalListComponent},
    {path: 'tribunal/:id', component: TribunalComponent}
];

@NgModule({
    imports: [RouterModule.forChild(tribunalRoutes)],
    exports: [RouterModule]
})
export class TribunalRoutingModule {}
