import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

export interface Category {
  id: number;
  nom: string;
  description: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule ,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class CategoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nom', 'description', 'operation'];
  dataSource = new MatTableDataSource<Category>([]);
  showAddCategoryForm = false;
  showEditCategoryForm = false;
  showViewCategoryDetails = false;
  currentCategory: Category | null = null;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  categories: Category[] = [
    { id: 1, nom: 'Catégorie 1', description: 'Description 1' },
    { id: 2, nom: 'Catégorie 2', description: 'Description 2' }
  ];

  newCategory: Category = { id: 0, nom: '', description: '' };

  constructor() {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.loadCategories();
  }

  loadCategories() {
    this.dataSource.data = this.categories;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addCategory() {
    if (this.newCategory.nom && this.newCategory.description) {
      this.newCategory.id = this.categories.length + 1;
      this.categories.push(this.newCategory);
      this.dataSource.data = [...this.categories];
      this.newCategory = { id: 0, nom: '', description: '' };
      this.showAddCategoryForm = false;
    }
  }

  editCategory(category: Category) {
    this.currentCategory = { ...category };
    this.showEditCategoryForm = true;
  }

  saveCategory() {
    if (this.currentCategory) {
      const index = this.categories.findIndex(c => c.id === this.currentCategory?.id);
      if (index !== -1) {
        this.categories[index] = { ...this.currentCategory };
        this.dataSource.data = [...this.categories];
      }
      this.currentCategory = null;
      this.showEditCategoryForm = false;
    }
  }

  viewCategory(category: Category) {
    this.currentCategory = { ...category };
    this.showViewCategoryDetails = true;
  }

  removeCategory(categoryId: number) {
    const confirmed = confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?');
    if (confirmed) {
      this.categories = this.categories.filter(c => c.id !== categoryId);
      this.dataSource.data = [...this.categories];
    }
  }

  closeDetails() {
    this.showViewCategoryDetails = false;
    this.currentCategory = null;
  }
}
