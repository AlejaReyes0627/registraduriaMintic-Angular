import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Usuario } from "../../../modelos/usuario.model";
import { SeguridadService } from "../../../servicios/seguridad.service";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  correo: string = "";
  contrasena: string = "";
  constructor(
    private miServicioSeguridad: SeguridadService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(): void {
    console.log(this.correo + "     "+this.contrasena);
    let elUsuario: Usuario = {
      correo: this.correo,
      contrasena: this.contrasena,
    };
    console.log(elUsuario)
    this.miServicioSeguridad.login(elUsuario).subscribe((data) => {
        this.router.navigate(["pages/homepage"]);
        this.miServicioSeguridad.guardarDatosSesion(data);
      },
      (error) => {
        console.log(error)
        Swal.fire({
          title: "Error Login",
          text: error["error"]["message"],
          icon: "error",
          timer: 5000,
        });
      }
    );
  }
}
