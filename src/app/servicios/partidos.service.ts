import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Partidos } from '../modelos/partidos.model';
@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  constructor(private http: HttpClient) {}

  
  listar(): Observable<Partidos[]> {
    return this.http.get<Partidos[]>(`http://127.0.0.1:7777/partidos`);
  }
  eliminar(id: string) {
    return this.http.delete<Partidos>(`http://127.0.0.1:7777/partidos/${id}`);
  }
  getPartidos(id: string): Observable<Partidos> {
    return this.http.get<Partidos>(`http://127.0.0.1:7777/partidos/${id}`);
  }
  crear(elPartidos: Partidos) {
    return this.http.post('http://127.0.0.1:7777/partidos', elPartidos);
  }
  editar(id: string, elPartidos: Partidos) {
    return this.http.put(`http://127.0.0.1:7777/partidos/${id}`, elPartidos);
  }

}
