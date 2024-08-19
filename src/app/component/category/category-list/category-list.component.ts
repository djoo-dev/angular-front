import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Category } from '../../category/category.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class CategoryListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nom', 'description', 'operation'];
  dataSource = new MatTableDataSource<Category>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor() {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.loadCategories();
  }

  loadCategories() {
    const categories: Category[] = [
      { id: 1, nom: 'Catégorie 1', description: 'Description 1' },
      { id: 2, nom: 'Catégorie 2', description: 'Description 2' }
    ];
    this.dataSource.data = categories;
  }

  openDialog(mode: 'view' | 'edit' | 'add', category: Category | null) {
    if (mode === 'add') {
      console.log('Ajouter une nouvelle catégorie');
      // Implémentez la logique d'ouverture du dialogue pour ajouter une catégorie
    } else if (mode === 'edit' && category) {
      console.log('Modifier la catégorie:', category);
      // Implémentez la logique d'ouverture du dialogue pour modifier la catégorie
    } else if (mode === 'view' && category) {
      console.log('Voir les détails de la catégorie:', category);
      // Implémentez la logique d'ouverture du dialogue pour voir les détails de la catégorie
    }
  }

  addCategory(category: Category) {
    this.dataSource.data = [...this.dataSource.data, category];
  }

  editCategory(category: Category) {
    this.dataSource.data = this.dataSource.data.map(c => c.id === category.id ? category : c);
  }

  removeCategory(categoryId: number) {
    this.dataSource.data = this.dataSource.data.filter(c => c.id !== categoryId);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
