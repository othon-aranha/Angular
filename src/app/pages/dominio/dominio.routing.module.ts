import { DominioComponent } from './dominio.component';
import { DominioListComponent } from './dominio-list/dominio-list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DominioFormComponent } from './dominio-form/dominio-form.component';


const dominioRoutes = [
    {path: 'dominio', component: DominioListComponent},
    {path: 'dominio/new', component: DominioFormComponent},
    {path: 'dominio/:id/edit', component: DominioFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(dominioRoutes)],
    exports: [RouterModule]
})
export class DominioRoutingModule {}
