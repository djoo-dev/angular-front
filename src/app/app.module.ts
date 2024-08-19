import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importer FormsModule ici
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

// Importer les composants standalone
import { FullComponent } from './layouts/full/full.component';
import { NavigationComponent } from './shared/header/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component'; // Assurez-vous que vous avez importé LoginComponent ici

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Assurez-vous que vous avez importé vos routes ici
import { CostProjectComponent } from './dashboard/dashboard-components/cost-project/cost-project.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    LoginComponent // Ajouter LoginComponent dans les déclarations
  ],
  imports: [
    NgApexchartsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, // Importer FormsModule ici
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes),
    FullComponent,
    NavigationComponent,
    SidebarComponent,
    HttpClientModule 
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
