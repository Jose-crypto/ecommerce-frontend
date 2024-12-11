import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../enviroments/enviroment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpservService {

  private baseUrl: string = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  // Obtener el token de autenticación
  getAuthToken(): string | null {
    return window.localStorage.getItem('auth_token');
  }

  // Establecer el token de autenticación
  setAuthToken(token: string | null): void {
    if (token === null) {
      window.localStorage.removeItem('auth_token');
    } else {
      window.localStorage.setItem('auth_token', token);
    }
  }
  
  request(method: string, url: string, data: any = {}): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getAuthToken() ? `Bearer ${this.getAuthToken()}` : ''
    });


    // Usamos HttpClient dependiendo del tipo de solicitud (GET, POST, PUT, DELETE)
    switch (method.toUpperCase()) {
      case 'GET':
        return this.http.get(`${this.baseUrl}${url}`, { headers });
      case 'POST':
        return this.http.post(`${this.baseUrl}${url}`, data, { headers });
      case 'PUT':
        return this.http.put(`${this.baseUrl}${url}`, data, { headers });
      case 'DELETE':
        return this.http.delete(`${this.baseUrl}${url}`, { headers });
      default:
        throw new Error('Invalid HTTP method');
    }
  }

}
