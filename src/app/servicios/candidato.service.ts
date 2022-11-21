import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Candidatos } from "../modelos/candidatos.model";
// import { Candidatos } from '../modelos/Candidatos.model' hay que ver que es usuario segun guia 5.8;
@Injectable({
  providedIn: "root",
})
export class CandidatosService {
  constructor(private http: HttpClient) {}

  listar(): Observable<Candidatos[]> {
    return this.http.get<Candidatos[]>(`http://127.0.0.1:7777/candidatos`);
  }
  eliminar(id: string) {
    return this.http.delete<Candidatos>(`http://127.0.0.1:7777/candidatos/${id}`);
  }
  getCandidatos(id: string): Observable<Candidatos> {
    return this.http.get<Candidatos>(`http://127.0.0.1:7777/candidatos/${id}`);
  }
  crear(elCandidatos: Candidatos) {
    return this.http.post('http://127.0.0.1:7777/candidatos', elCandidatos);
  }
  editar(id: string, elCandidatos: Candidatos) {
    return this.http.put(`http://127.0.0.1:7777/candidatos/${id}`, elCandidatos);
  }
  asignar(id:string,id_partidos:string){
    return this.http.put(`http://127.0.0.1:7777/candidatos/${id}/partidos/${id_partidos}`,"vacios");
  }
}
