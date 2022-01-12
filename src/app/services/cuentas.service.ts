import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cuentas } from 'app/models/cuentas';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders().append('Content-Type', 'application/json');
  urlApi = `${environment.host_api}Cuentas`;

  getItems(idCliente = 0):Observable<Cuentas[]> {
    const url = `${this.urlApi}${idCliente ? `/${idCliente}`: ''}`;
    return this.http.get<Cuentas[]>(url,{headers: this.headers});
  }
  postItem(item:Cuentas):Observable<Cuentas> {
    const url = `${this.urlApi}`;
    return this.http.post<Cuentas>(url,JSON.stringify(item),{headers: this.headers});
  }
}
