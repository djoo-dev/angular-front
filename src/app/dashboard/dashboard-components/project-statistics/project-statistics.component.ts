import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexDataLabels } from 'ng-apexcharts';

// Déclaration des types pour les options du graphique
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-project-statistics',
  templateUrl: './project-statistics.component.html',
  styleUrls: ['./project-statistics.component.scss']
})
export class ProjectStatisticsComponent implements OnInit {
  // Initialisation des options du graphique
  public chartOptions: ChartOptions = {
    series: [{
      name: 'Nombre de Projets',
      data: []  // Données initiales vides
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    xaxis: {
      categories: []  // Catégories initiales vides
    },
    title: {
      text: 'Statistiques des Projets'
    },
    dataLabels: {
      enabled: true
    }
  };

  constructor() {}

  ngOnInit(): void {
    this.updateChart();
  }

  updateChart(): void {
    const projectCategories = [
      { name: 'Catégorie 1', value: 15 },
      { name: 'Catégorie 2', value: 25 },
      { name: 'Catégorie 3', value: 35 }
    ];
  
    console.log('Project Categories:', projectCategories);
  
    this.chartOptions.series = [{
      name: 'Nombre de Projets',
      data: projectCategories.map(category => category.value)
    }];
  
    this.chartOptions.xaxis = {
      categories: projectCategories.map(category => category.name)
    };
    
    console.log('Chart Options:', this.chartOptions);
  }
  
}
