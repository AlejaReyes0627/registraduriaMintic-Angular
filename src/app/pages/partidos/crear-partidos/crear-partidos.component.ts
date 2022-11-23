import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { Partidos } from "../../../modelos/partidos.model";
import { PartidosService } from "../../../servicios/partidos.service";

@Component({
  selector: "ngx-crear",
  templateUrl: "./crear-partidos.component.html",
  styleUrls: ["./crear-partidos.component.scss"],
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  partidos: Partidos[];
  _id: string = "";
  partidoSeleccionado: string = "";
  intentoEnvio: boolean = false;
  elPartido: Partidos = {
   // _id:"",
    nombre:"",
    lema:"",
  };
  //miServicioPartido: any;
  constructor(
    private miServicioPartidos: PartidosService,
    private rutaActiva: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    //this.listarPartidos();
    if (this.rutaActiva.snapshot.params._id) {
      this.modoCreacion = false;
      this._id = this.rutaActiva.snapshot.params._id;
      this.getPartido(this._id);
    } else {
      this.modoCreacion = true;
    }
  }
  /*listarPartidos() {
    this.miServicioPartidos.listar().subscribe((data) => {
      this.partidos = data;
    });
  }*/
  getPartido(id: string) {
    this.miServicioPartidos.getPartidos(id).subscribe((data) => {
      this.elPartido = data;
    });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioPartidos.crear(this.elPartido).subscribe((data) => {
            Swal.fire(
              "Creado",
              "El Partido ha sido creado correctamente",
              "success"
            );
    
            this.router.navigate(["pages/partidos/listar"]);

        
      });
    }
  }
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
        //console.log(this.partidoSeleccionado)
      this.miServicioPartidos
        .editar(this.elPartido._id, this.elPartido)
        .subscribe((data) => {
          /*this.miServicioUsuarios.asignar(this._id,this.partidoSeleccionado).subscribe(data=>{
            console.log(data)
          })*/
          Swal.fire(
            "Actualizado",
            "El Partido ha sido actualizado correctamente",
            "success"
          );
          this.router.navigate(["pages/partidos/listar"]);
        });
    }
  }
  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (
      //this.elPartido._id == "" ||
      this.elPartido.nombre == "" ||
      this.elPartido.lema == ""
     ) {
      return false;
    } else {
      return true;
    }
  }
}
