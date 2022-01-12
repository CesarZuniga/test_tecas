import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clientes } from 'app/models/clientes';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders().append('Content-Type', 'application/json');
  urlApi = `${environment.host_api}Clientes`;

  getItems():Observable<Clientes[]> {
    const url = `${this.urlApi}`;
    return this.http.get<Clientes[]>(url,{headers: this.headers});
  }
  postItem(item:Clientes):Observable<Clientes> {
    const url = `${this.urlApi}`;
    return this.http.post<Clientes>(url,JSON.stringify(item),{headers: this.headers});
  }

}
