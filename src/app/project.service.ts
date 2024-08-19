import { Injectable } from '@angular/core';
import { Project } from './project';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    { id: 1, name: 'Project 1', description: 'Description 1', dateDebut: new Date(), dateFin: new Date(), frais: 100, categorieId: 1 },
    { id: 2, name: 'Project 2', description: 'Description 2', dateDebut: new Date(), dateFin: new Date(), frais: 200, categorieId: 2 }
    // Ajoutez d'autres projets si nécessaire
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }

  addProject(project: Project): void {
    this.projects.push(project);
  }

  updateProject(updatedProject: Project): void {
    const index = this.projects.findIndex(project => project.id === updatedProject.id);
    if (index !== -1) {
      this.projects[index] = updatedProject;
    }
  }

  deleteProject(id: number): void {
    this.projects = this.projects.filter(project => project.id !== id);
  }
}
