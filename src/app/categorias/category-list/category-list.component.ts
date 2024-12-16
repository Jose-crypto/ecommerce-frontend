import { Component } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  categorias: any[] = [];

  constructor(private categoriasService: CategoriasService, private router: Router) {}

  ngOnInit(): void {
    this.categoriasService.getCategorias().subscribe({
      next: (data) => {
        this.categorias = data;  // Asignar los datos a la propiedad
        console.log(data);        // Mostrar los datos en consola para depuración
      },
      error: (error) => {
        console.error('Hubo un error al obtener las categorías:', error);
        alert('No se pudo obtener las categorías. Por favor, intente más tarde.');
      }
    });
  }

  editCategory(id: number): void {
    this.router.navigate([`/categorias/form/${id}`]);
  }

  deleteCategory(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta categoría?')) {
      this.categoriasService.deleteCategoria(id).subscribe(() => {
        this.ngOnInit(); // recargar la lista
      });
    }
  }
}
