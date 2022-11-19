import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { Candidatos } from "../../../modelos/candidatos.model";
import { UsuarioService } from "../../../servicios/usuario.service";

@Component({
  selector: "ngx-crear",
  templateUrl: "./crear.component.html",
  styleUrls: ["./crear.component.scss"],
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  _id: string = "";
  intentoEnvio: boolean = false;
  elCandidato: Candidatos = {
    cedula: "",
    nombre: "",
    apellido: "",
    numero_resolucion:0
  };
  constructor(
    private miServicioUsuarios: UsuarioService,
    private rutaActiva: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.user_id) {
      this.modoCreacion = false;
      this._id = this.rutaActiva.snapshot.params.user_id;
      this.getUsuario(this._id);
    } else {
      this.modoCreacion = true;
    }
  }
  getUsuario(id: string) {
    this.miServicioUsuarios.getUsuario(id).subscribe((data) => {
      this.elCandidato = data;
      console.log(this.elCandidato)
    });
  }
  agregar(): void {
    console.log(this.validarDatosCompletos())
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioUsuarios.crear(this.elCandidato).subscribe((data) => {
        console.log(data)
        Swal.fire(
          "Creado",
          "El Usuario ha sido creado correctamente",
          "success"
        );
        this.router.navigate(["pages/usuario/listar"]);
      });
    }
  }
  editar(): void {
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
      this.elCandidato.numero_resolucion ==0
    ) {
      return false;
    } else {
      return true;
    }
  }
}
