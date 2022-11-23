import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Mesas } from "../modelos/mesas.model";
@Injectable({
  providedIn: 'root'
})
export class MesasService {
  constructor(private http: HttpClient) { }
  listar(): Observable<Mesas[]> {
    return this.http.get<Mesas[]>(`http://127.0.0.1:7777/mesas`);
  }
  eliminar(id: string) {
    return this.http.delete<Mesas>(`http://127.0.0.1:7777/mesas/${id}`);
  }
  getMesas(id: string): Observable<Mesas> {
    return this.http.get<Mesas>(`http://127.0.0.1:7777/mesas/${id}`);
  }
  crear(elMesas: Mesas) {
    return this.http.post('http://127.0.0.1:7777/mesas', elMesas);
  }
  editar(id: string, elMesas: Mesas) {
    return this.http.put(`http://127.0.0.1:7777/mesas/${id}`, elMesas);
  }
}
