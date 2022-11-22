import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPartidosComponent } from './crear-partidos/crear-partidos.component';
import { ListarPartidosComponent } from './listar-partidos/listar-partidos.component';

const routes: Routes = [{
  path: 'listar',
  component: ListarPartidosComponent
},
{
  path: 'crear',
  component: CrearPartidosComponent
},
{
  path: 'actualizar/:_id',
  component: CrearPartidosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidosRoutingModule { }
