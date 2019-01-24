import { DominioComponent } from './dominio.component';
import { DominioListComponent } from './dominio-list/dominio-list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const dominioRoutes = [
    {path: 'dominio', component: DominioListComponent},
    {path: 'dominio/new', component: DominioComponent},
    {path: 'dominio/:id/edit', component: DominioComponent}
];

@NgModule({
    imports: [RouterModule.forChild(dominioRoutes)],
    exports: [RouterModule]
})
export class DominioRoutingModule {}
