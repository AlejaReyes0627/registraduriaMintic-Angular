import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../modelos/Usuario.model';
// import { Usuario } from '../modelos/usuario.model' hay que ver que es usuario segun guia 5.8;
@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Usuario[]> {
    return
this.http.get<Usuario[]>(`${environment.http://127.0.0.1:9090}/usuario`);
  }
  eliminar(id:string){
    return
this.http.delete<Usuario>(`${environment.http://127.0.0.1:9090}/usuario/${id}`,
);
  }
}
