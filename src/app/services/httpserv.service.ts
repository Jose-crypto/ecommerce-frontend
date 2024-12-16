import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../enviroments/enviroment';
import { catchError, Observable, throwError } from 'rxjs';
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

  // Manejo de errores HTTP
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error';
    if (error.error instanceof ErrorEvent) {
   
      errorMessage = `Error: ${error.error.message}`;
    } else {

      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));  // Propaga el error correctamente

  }
  
  request(method: string, url: string, data: any = {}): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getAuthToken() ? `Bearer ${this.getAuthToken()}` : ''
    });

    

    // Usamos HttpClient dependiendo del tipo de solicitud (GET, POST, PUT, DELETE)
    switch (method.toUpperCase()) {
      case 'GET':
        return this.http.get(`${this.baseUrl}${url}`, { headers }).pipe(
          catchError(this.handleError)  // Captura el error y lo maneja
        );

      case 'POST':
        return this.http.post(`${this.baseUrl}${url}`, { headers }).pipe(
          catchError(this.handleError)  // Captura el error y lo maneja
        );

      case 'PUT':
        return this.http.put(`${this.baseUrl}${url}`, { headers }).pipe(
          catchError(this.handleError)  // Captura el error y lo maneja
        );

      case 'DELETE':
        return this.http.delete(`${this.baseUrl}${url}`, { headers }).pipe(
          catchError(this.handleError)  // Captura el error y lo maneja
        );

      default:
        throw new Error('Invalid HTTP method');
    }
  }

}
