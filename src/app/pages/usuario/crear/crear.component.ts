import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { Candidatos } from "../../../modelos/candidatos.model";
import { Partidos } from "../../../modelos/partidos.model";
import { PartidosService } from "../../../servicios/partidos.service";
import { CandidatosService } from "../../../servicios/candidato.service";

@Component({
  selector: "ngx-crear",
  templateUrl: "./crear.component.html",
  styleUrls: ["./crear.component.scss"],
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  partidos: Partidos[];
  _id: string = "";
  partidoSeleccionado: string = "";
  intentoEnvio: boolean = false;
  elCandidato: Candidatos = {
    cedula: "",
    nombre: "",
    apellido: "",
    numero_resolucion: 0,
  };
  constructor(
    private miServicioUsuarios: CandidatosService,
    private miServicioPartidos: PartidosService,
    private rutaActiva: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.listarPartidos();
    if (this.rutaActiva.snapshot.params._id) {
      this.modoCreacion = false;
      this._id = this.rutaActiva.snapshot.params._id;
      this.getUsuario(this._id);
    } else {
      this.modoCreacion = true;
    }
  }
  listarPartidos() {
    this.miServicioPartidos.listar().subscribe((data) => {
      this.partidos = data;
    });
  }
  getUsuario(id: string) {
    this.miServicioUsuarios.getCandidatos(id).subscribe((data) => {
      this.elCandidato = data;
    });
  }
  agregar(): void {
    console.log(this.partidoSeleccionado);
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioUsuarios.crear(this.elCandidato).subscribe((data) => {
        let result = data;
        console.log(result);
        let claves = Object.keys(result);
        console.log(result[claves[0]])
          this.miServicioUsuarios.asignar(result[claves[0]],this.partidoSeleccionado).subscribe(data=>{
            console.log(data)
          })
          setTimeout(function(){
            Swal.fire(
              "Creado",
              "El Usuario ha sido creado correctamente",
              "success"
            );
    
            this.router.navigate(["pages/usuario/listar"]);
        }, 2000);

        
      });
    }
  }
  editar(): void {
    this.intentoEnvio = true;
    console.log("hola");
    console.log(this.validarDatosCompletos);
    if (this.validarDatosCompletos()) {
      this.miServicioUsuarios
        .editar(this.elCandidato._id, this.elCandidato)
        .subscribe((data) => {
          Swal.fire(
            "Actualizado",
            "El Usuario ha sido actualizado correctamente",
            "success"
          );
          this.router.navigate(["pages/usuario/listar"]);
        });
    }
  }
  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (
      this.elCandidato.cedula == "" ||
      this.elCandidato.nombre == "" ||
      this.elCandidato.apellido == "" ||
      this.elCandidato.numero_resolucion == 0
    ) {
      return false;
    } else {
      return true;
    }
  }
}
