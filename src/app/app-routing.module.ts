import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Features/inicio/inicio.component';


const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'favoritos', loadChildren: () => import('./Features/favoritos/favoritos.module').then(m => m.FavoritosModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }