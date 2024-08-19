import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ProjectsComponent } from './component/project/project.component'; // Correct import
import { CategoryComponent } from './component/category/category.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'projects',
        component: ProjectsComponent // Correct path and component
      },
      {
        path: 'categories',
        component: CategoryComponent // Route for categories
      }
    ]
  },
  { path: '**', redirectTo: '/login' }
  
];
