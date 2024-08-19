import { Component, OnInit } from '@angular/core';
import { ApexNonAxisChartSeries, ApexChart, ApexDataLabels, ApexTitleSubtitle } from 'ng-apexcharts';

@Component({
  selector: 'app-least-expensive-project',
  templateUrl: './least-expensive-project.component.html',
  styleUrls: ['./least-expensive-project.component.scss']
})
export class LeastExpensiveProjectComponent implements OnInit {
  public chartOptions: any;

  ngOnInit() {
    const leastExpensiveProject = this.getLeastExpensiveProject();

    this.chartOptions = {
      series: [leastExpensiveProject.cost],
      chart: {
        type: 'donut',
        height: 350
      },
      labels: [leastExpensiveProject.name],
      dataLabels: {
        enabled: true
      },
      title: {
        text: 'Le projet le moins coûteux'
      }
    };
  }

  getLeastExpensiveProject() {
    // Simuler les données des projets pour l'exemple.
    const projects = [
      { name: 'Projet A', cost: 100 },
      { name: 'Projet 2', cost: 200 },
    ];

    return projects.reduce((min, project) => project.cost < min.cost ? project : min);
  }
}
