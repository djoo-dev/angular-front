import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexDataLabels } from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-cost-project',
  templateUrl: './cost-project.component.html',
  styleUrls: ['./cost-project.component.scss']
})
export class CostProjectComponent implements OnInit {
  public chartOptions: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    title: ApexTitleSubtitle;
    dataLabels: ApexDataLabels;
  };

  constructor() {
    this.chartOptions = {
      series: [{
        name: 'Coût Total',
        data: [10000, 15000, 20000, 25000, 30000] // Exemple de données de coût
      }],
      chart: {
        type: 'bar',
        height: 350
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
      },
      title: {
        text: 'Coût Total des Projets'
      },
      dataLabels: {
        enabled: true
      }
    };
  }

  ngOnInit(): void {}
}
