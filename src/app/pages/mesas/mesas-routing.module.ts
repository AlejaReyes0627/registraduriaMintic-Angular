import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarMesasComponent } from './listar-mesas/listar-mesas.component';
import { CrearMesasComponent } from './crear-mesas/crear-mesas.component'; 
const routes: Routes = [
  {
    path: 'listar',
    component: ListarMesasComponent
  },
  {
    path: 'crear',
    component: CrearMesasComponent
  },
  {
    path: 'actualizar/:_id',
    component: CrearMesasComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesasRoutingModule { }
