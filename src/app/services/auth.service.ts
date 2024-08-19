import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'votre-url-api/logout'; // Remplacez par l'URL réelle de votre API
  private isAuthenticated = false;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): boolean {
    const validUsername = 'admin';
    const validPassword = 'admin123';
    if (username === validUsername && password === validPassword) {
      this.isAuthenticated = true;
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  logout(): Observable<void> {
    this.isAuthenticated = false; // Réinitialiser le statut d'authentification
    return this.http.post<void>(this.apiUrl, {}); // Effectuer une requête POST pour se déconnecter
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
