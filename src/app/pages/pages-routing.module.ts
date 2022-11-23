import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PartidosModule } from './partidos/partidos.module';
import {MesasModule} from './mesas/mesas.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'seguridad',
      loadChildren: () => import('./seguridad/seguridad.module')
        .then(m => m.SeguridadModule),
    },
    {
      path: 'usuario',
      loadChildren: () => import('./usuario/usuario.module')
        .then(m => m.UsuarioModule),
    },
    {
      path: '',
      redirectTo: 'seguridad/login',
      pathMatch: 'full',
    },
    {
      path: 'partidos',
      loadChildren: ()=> import('./partidos/partidos.module')
        .then(m=>m.PartidosModule),
    },
    {
      path: 'mesas',
      loadChildren: ()=> import('./mesas/mesas.module')
        .then(m=>m.MesasModule),
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
