import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidosRoutingModule } from './partidos-routing.module';
import { CrearPartidosComponent } from './crear-partidos/crear-partidos.component';
import { ListarPartidosComponent } from './listar-partidos/listar-partidos.component';

import { FormsModule} from '@angular/forms';
import { NbCardModule } from '@nebular/theme';
import { NbSelectModule } from '@nebular/theme';


@NgModule({
  declarations: [
    CrearPartidosComponent,
    ListarPartidosComponent
  ],
  imports: [
    FormsModule,
    NbSelectModule,
    NbCardModule,
    CommonModule,
    PartidosRoutingModule
  ]
})
export class PartidosModule { }
