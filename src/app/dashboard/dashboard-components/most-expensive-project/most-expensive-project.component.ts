import { Component, OnInit } from '@angular/core';
import { ApexNonAxisChartSeries, ApexChart, ApexDataLabels, ApexTitleSubtitle, ApexLegend } from 'ng-apexcharts';
import { ProjectService } from '../../../project.service'; // Adjust the import based on your actual service location

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-most-expensive-project',
  templateUrl: './most-expensive-project.component.html',
  styleUrls: ['./most-expensive-project.component.scss']
})
export class MostExpensiveProjectComponent implements OnInit {
  public chartOptions: ChartOptions;

  constructor(private projectService: ProjectService) {
    this.chartOptions = {
      series: [],
      chart: {
        type: 'pie',
        height: 350
      },
      dataLabels: {
        enabled: true
      },
      title: {
        text: 'le projet le plus couteux'
      },
      labels: [],
      legend: {
        position: 'bottom'
      }
    };
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => {
      const sortedProjects = projects.sort((a, b) => b.frais - a.frais);
      const mostExpensiveProjects = sortedProjects.slice(0, 5); // Get top 5 most expensive projects

      this.chartOptions.series = mostExpensiveProjects.map(project => project.frais);
      this.chartOptions.labels = mostExpensiveProjects.map(project => project.name);
    });
  }
}
