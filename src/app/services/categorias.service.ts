import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private apiUrl="http://localhost:8080/categorias"
  constructor(private http: HttpClient) { }

  //get alll categorias
  getCategorias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  // Eliminar una categoría
  deleteCategoria(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
