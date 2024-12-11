import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { CategoryListComponent } from './categorias/category-list/category-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,LoginFormComponent,FormsModule,CategoryListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
