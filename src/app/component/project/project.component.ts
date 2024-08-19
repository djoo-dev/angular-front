import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule, DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Project } from '../../project';
import { ProjectListeComponent } from './project-liste/project-liste.component';

@Component({
  selector: 'app-projects',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    DatePipe
  ]
})
export class ProjectsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'dateDebut', 'dateFin', 'frais', 'categorieId', 'operation'];
  dataSource = new MatTableDataSource<Project>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  categories: { id: number; name: string }[] = [
    { id: 1, name: 'Catégorie 1' },
    { id: 2, name: 'Catégorie 2' },
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadProjects();
    this.dataSource.paginator = this.paginator;
  }

  loadProjects() {
    const projects: Project[] = [
      { id: 1, name: 'Projet A', description: 'Description A', dateDebut: new Date(), dateFin: new Date(), frais: 1000, categorieId: 1 },
    ];
    this.dataSource.data = projects;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(mode: 'view' | 'edit' | 'add', project: Project | null) {
    const dialogRef = this.dialog.open(ProjectListeComponent, {
      width: '400px',
      data: {
        mode,
        project,
        categories: this.categories
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.action === 'add') {
          this.addProject(result.project);
        } else if (result.action === 'edit') {
          this.editProject(result.project);
        }
      }
    });
  }

  addProject(newProject: Project) {
    const projects = this.dataSource.data;
    newProject.id = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1;
    projects.push(newProject);
    this.dataSource.data = [...projects];
  }

  editProject(updatedProject: Project) {
    const projects = this.dataSource.data.map(p => p.id === updatedProject.id ? updatedProject : p);
    this.dataSource.data = [...projects];
  }

  removeProject(id: number) {
    const confirmed = confirm('Êtes-vous sûr de vouloir supprimer ce projet ?');
    if (confirmed) {
    const projects = this.dataSource.data.filter(p => p.id !== id);
    this.dataSource.data = [...projects];
  }
}

  getCategoryName(id: number): string {
    const category = this.categories.find(c => c.id === id);
    return category ? category.name : '';
  }
}
