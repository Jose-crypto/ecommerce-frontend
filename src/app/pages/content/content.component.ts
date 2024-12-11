import { Component } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { AxiosService } from '../../services/axios.service';
import { ButtonsComponent } from '../../buttons/buttons.component';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [LoginFormComponent,ButtonsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  constructor(private axiosService: AxiosService){}
    
  onLogin(input: any): void{
      this.axiosService.request(
        "POST",
        "/login",
        {
          login: input.login,
          password: input.password
        }
      ).then(response =>{
        this.axiosService.setAuthToken(response.data.token)
      })
  }

  onRegister(input: any): void{
    this.axiosService.request(
      "POST",
      "/register",
      {
        firstName: input.firstName,
        lastName: input.lastName,
        login: input.login,
        password: input.password,

      }
    ).then(response =>{
      this.axiosService.setAuthToken(response.data.token)
    })
  }
}
