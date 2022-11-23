import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear-partidos/crear-partidos.component';
import { ListarPartidosComponent } from './listar-partidos/listar-partidos.component';

const routes: Routes = [{
  path: 'listar',
  component: ListarPartidosComponent
},
{
  path: 'crear',
  component: CrearComponent
},
{
  path: 'actualizar/:_id',
  component: CrearComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidosRoutingModule { }
