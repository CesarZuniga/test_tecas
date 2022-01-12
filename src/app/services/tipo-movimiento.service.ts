import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoMovimiento } from 'app/models/tipo-movimiento';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoMovimientoService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders().append('Content-Type', 'application/json');
  urlApi = `${environment.host_api}TipoMovimiento`;

  getItems():Observable<TipoMovimiento[]> {
    const url = `${this.urlApi}`;
    return this.http.get<TipoMovimiento[]>(url,{headers: this.headers});
  }
}
