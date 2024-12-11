import { Component } from '@angular/core';
import { AxiosService } from '../services/axios.service'; 

@Component({
  selector: 'app-auth-content',
  standalone: true,
  imports: [],
  templateUrl: './auth-content.component.html',
  styleUrl: './auth-content.component.css'
})
export class AuthContentComponent {

  //respons for the backend
  data: string[]=[];

  //inyectar el servicio de axios in te constructor
  constructor(private axiosService: AxiosService){}
  
  ngOnInit(): void{
    
    this.axiosService.request(
      "GET",
      "/messages",
      {}
    ).then(
      (response) => this.data = response.data
    );
  }

}
