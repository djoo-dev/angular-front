import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ProjectsComponent } from './component/project/project.component';
import { CategoryComponent } from './component/category/category.component';
import { CategoryStatisticsComponent } from './dashboard/dashboard-components/category-statistics/category-statistics.component';
import { CostProjectComponent } from './dashboard/dashboard-components/cost-project/cost-project.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'categories', component: CategoryComponent },
      { path: 'category-statistics', component: CategoryStatisticsComponent },
      { path: 'cost-project', component: CostProjectComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
    ]
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
