import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../modelos/Usuario.model";
// import { Usuario } from '../modelos/usuario.model' hay que ver que es usuario segun guia 5.8;
@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`http://127.0.0.1:7777/candidatos`);
  }
  eliminar(id: string) {
    return this.http.delete<Usuario>(`http://127.0.0.1:7777/candidatos/${id}`);
  }
  getUsuario(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`http://127.0.0.1:7777/candidatos/${id}`);
  }
  crear(elUsuario: Usuario) {
    return this.http.post('http://127.0.0.1:7777/candidatos', elUsuario);
  }
  editar(id: string, elUsuario: Usuario) {
    return this.http.put(`http://127.0.0.1:7777/candidatos/${id}`, elUsuario);
  }
}
