import { Component } from '@angular/core';
import { HttpservService } from '../services/httpserv.service';
@Component({
  selector: 'app-auth-content',
  standalone: true,
  imports: [],
  templateUrl: './auth-content.component.html',
  styleUrl: './auth-content.component.css'
})
export class AuthContentComponent {

   // Esta propiedad almacenará los mensajes que recibimos desde el backend
  data: string[] = [];

  constructor(private httpService: HttpservService) {}

  // En el ngOnInit realizamos la petición GET usando el servicio HttpService
  ngOnInit(): void {
    // Usamos el servicio request para hacer la solicitud GET
    this.httpService.request('GET', '/messages').subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error al obtener los mensajes', error);
      }
    );
  }

}
