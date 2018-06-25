import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ModuloModule } from './modulo/modulo.module';
import { MenuComponent } from './menu/menu.component';
import { ModuloListComponent } from './modulo/modulo-list.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'modulo', component: ModuloListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
=======
import { ModuloListComponent } from './modulo/modulo-list/modulo-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'modulos', component: ModuloListComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
>>>>>>> f628028ff05876d80a1c6d3d5fe2da0352c2ce91
];

@NgModule({
  imports: [
    CommonModule,
    ModuloModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule, ModuloModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: []
})
export class AppRoutingModule { }
