import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movimientos } from 'app/models/movimientos';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders().append('Content-Type', 'application/json');
  urlApi = `${environment.host_api}Movimientos`;

  getItems(idCuenta:number, idTipo = 0):Observable<Movimientos[]> {
    const url = `${this.urlApi}/${idCuenta}${idTipo ? `/${idTipo}`: '/0'}`;
    return this.http.get<Movimientos[]>(url,{headers: this.headers});
  }
  postItem(item:Movimientos):Observable<Movimientos> {
    const url = `${this.urlApi}`;
    return this.http.post<Movimientos>(url,JSON.stringify(item),{headers: this.headers});
  }
}
