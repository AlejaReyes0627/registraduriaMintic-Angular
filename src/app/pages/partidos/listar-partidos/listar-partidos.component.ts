import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { Partidos } from "../../../modelos/partidos.model";
import { PartidosService } from "../../../servicios/partidos.service";

@Component({
  selector: 'ngx-listar-partidos',
  templateUrl: './listar-partidos.component.html',
  styleUrls: ['./listar-partidos.component.scss']
})
export class ListarPartidosComponent implements OnInit {
  partido: Partidos[];
  nombresColumnas: string[] = [
    "_id",
    "nombre",
    "lema",
    ];
  constructor(
    private miServicioPartido: PartidosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listar();
  }
  listar(): void {
    this.miServicioPartido.listar().subscribe((data) => {
      this.partido = data;
    });
  }
  agregar(): void {
    this.router.navigate(["pages/partidos/crear"]);
  }
  editar(id: string): void {
    this.router.navigate(["pages/partidos/actualizar/" + id]);
  }
  eliminar(id: string): void {
    Swal.fire({
      title: "Eliminar Partido",
      text: "Está seguro que quiere eliminar el partido?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioPartido.eliminar(id).subscribe((data) => {
          Swal.fire(
            "Eliminado!",
            "El partido ha sido eliminada correctamente",
            "success"
          );
          this.ngOnInit();
        });
      }
    });
  }
}
