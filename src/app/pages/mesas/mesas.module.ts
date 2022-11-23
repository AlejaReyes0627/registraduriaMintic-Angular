import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesasRoutingModule } from './mesas-routing.module';
import { CrearMesasComponent } from './crear-mesas/crear-mesas.component';
import { ListarMesasComponent } from './listar-mesas/listar-mesas.component';

import { FormsModule} from '@angular/forms';
import { NbCardModule } from '@nebular/theme';
import { NbSelectModule } from '@nebular/theme';

@NgModule({
  declarations: [
    CrearMesasComponent,
    ListarMesasComponent
  ],
  imports: [
    FormsModule,
    NbSelectModule,
    NbCardModule,
    CommonModule,
    MesasRoutingModule
  ]
})
export class MesasModule { }
