import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';

import { DashboardComponent } from './dashboard.component';
import { SalesSummaryComponent } from './dashboard-components/sales-summary/sales-summary.component';
import { FeedsComponent } from './dashboard-components/feeds/feeds.component';
import { TopSellingComponent } from './dashboard-components/top-selling/top-selling.component';
import { TopCardsComponent } from './dashboard-components/top-cards/top-cards.component';
import { BlogCardsComponent } from './dashboard-components/blog-cards/blog-cards.component';
import { ProjectStatisticsComponent } from './dashboard-components/project-statistics/project-statistics.component';
import { CategoryStatisticsComponent } from './dashboard-components/category-statistics/category-statistics.component';
import { CostProjectComponent } from './dashboard-components/cost-project/cost-project.component';
import { MostExpensiveProjectComponent } from './dashboard-components/most-expensive-project/most-expensive-project.component';
import { LeastExpensiveProjectComponent } from './dashboard-components/least-expensive-project/least-expensive-project.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
      urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Dashboard' }]
    }
  }
];

@NgModule({
  declarations: [
    CostProjectComponent,
    CategoryStatisticsComponent,
    DashboardComponent,
    SalesSummaryComponent,
    FeedsComponent,
    TopSellingComponent,
    TopCardsComponent,
    BlogCardsComponent,
    ProjectStatisticsComponent,
    MostExpensiveProjectComponent,
    LeastExpensiveProjectComponent,

  ],
  imports: [
    
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgApexchartsModule
  ]
})
export class DashboardModule { }
