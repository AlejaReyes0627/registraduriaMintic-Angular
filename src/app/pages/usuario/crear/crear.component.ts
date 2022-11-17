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
  id_Usuario: string = "";
  intentoEnvio: boolean = false;
  elUsuario: Usuario = {
    _id: "",
    pseudonimo: "",
    correo: "",
    contrasena: "",
    token: "",
  };
  constructor(
    private miServicioUsuarios: UsuarioService,
    private rutaActiva: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_Usuario) {
      this.modoCreacion = false;
      this.id_Usuario = this.rutaActiva.snapshot.params.id_Usuario;
      this.getUsuario(this.id_Usuario);
    } else {
      this.modoCreacion = true;
    }
  }
  getUsuario(id: string) {
    this.miServicioUsuarios.getUsuario(id).subscribe((data) => {
      this.elUsuario = data;
    });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioUsuarios.crear(this.elUsuario).subscribe((data) => {
        Swal.fire(
          "Creado",
          "El Usuario ha sido creado correctamente",
          "success"
        );
        this.router.navigate(["pages/Usuarios/listar"]);
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
          this.router.navigate(["pages/Usuarios/listar"]);
        });
    }
  }
  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (
      this.elUsuario._id == "" ||
      this.elUsuario.pseudonimo == "" ||
      this.elUsuario.correo == "" ||
      this.elUsuario.contrasena == "" ||
      this.elUsuario.token == ""
    ) {
      return false;
    } else {
      return true;
    }
  }
}
