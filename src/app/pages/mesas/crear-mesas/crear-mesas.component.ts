import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { Mesas } from '../../../modelos/mesas.model'; 
import { MesasService } from '../../../servicios/mesas.service';
@Component({
  selector: 'ngx-crear-mesas',
  templateUrl: './crear-mesas.component.html',
  styleUrls: ['./crear-mesas.component.scss']
})
export class CrearMesasComponent implements OnInit {
  modoCreacion: boolean = true;
  _id: string = "";
  intentoEnvio: boolean = false;
  elMesa: Mesas = {
    numero_mesa: "",
    cantidad_inscritos:""
      
    };
  constructor(private miServicioMesas: MesasService,
    private rutaActiva: ActivatedRoute,
    private router: Router) {
    
   }

  ngOnInit(): void {
     if (this.rutaActiva.snapshot.params._id) {
      this.modoCreacion = false;
      this._id = this.rutaActiva.snapshot.params._id;
      console.log(this._id)
      this.getMesas(this._id);
    } else {
      this.modoCreacion = true;
    }
  }
  getMesas(id: string) {
    this.miServicioMesas.getMesas(id).subscribe((data) => {
      this.elMesa = data;
    });
  }
  agregarMesa(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioMesas.crear(this.elMesa).subscribe((data) => {
            Swal.fire(
              "Creado",
              "El Usuario ha sido creado correctamente",
              "success"
            );
    
            this.router.navigate(["pages/mesas/listar"]);

        
      });
    }
  }
  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.elMesa.numero_mesa == "" || this.elMesa.cantidad_inscritos == "" 
    ) {
      return false;
    } else {
      return true;
    }
  }
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
        //console.log(this.partidoSeleccionado)
      this.miServicioMesas
        .editar(this.elMesa._id, this.elMesa)
        .subscribe((data) => {
          /*this.miServicioUsuarios.asignar(this._id,this.partidoSeleccionado).subscribe(data=>{
            console.log(data)
          })*/
          Swal.fire(
            "Actualizado",
            "La Mesa ha sido actualizado correctamente",
            "success"
          );
          this.router.navigate(["pages/mesas/listar"]);
        });
    }
  }
}
