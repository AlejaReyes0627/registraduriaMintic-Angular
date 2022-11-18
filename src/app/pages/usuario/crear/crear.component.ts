import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { Usuario } from "../../../modelos/usuario.model";
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
  elUsuario: Usuario = {
    pseudonimo: "",
    correo: "",
    contrasena: "",
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
      this.elUsuario = data;
      console.log(this.elUsuario)
    });
  }
  agregar(): void {
    console.log(this.validarDatosCompletos())
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioUsuarios.crear(this.elUsuario).subscribe((data) => {
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
        .editar(this.elUsuario._id, this.elUsuario)
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
      this.elUsuario.pseudonimo == "" ||
      this.elUsuario.correo == "" ||
      this.elUsuario.contrasena == "" 
    ) {
      return false;
    } else {
      return true;
    }
  }
}
