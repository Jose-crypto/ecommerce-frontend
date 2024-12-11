import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

    @Output() onSubmitLoginEvent= new EventEmitter();
    @Output() onSubmitRegisterEvent= new EventEmitter();

    active: String = "login";
    firstName: String ="";
    lastName: String ="";
    login: string= "";
    password: string="";

    onLoginTab(): void{
      this.active="login";
    }

    onRegisterTab(): void{
      this.active="register";
    }
    
    onSubmitLogin(): void{
      this.onSubmitLoginEvent.emit({"login": this.login , "password: ": this.password})
    }

    onSubmitRegister(): void{
      this.onSubmitLoginEvent.emit({"firstName":this.firstName,"lastName":this.lastName,"login": this.login , "password: ": this.password})
    }
}
