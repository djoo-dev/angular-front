import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexDataLabels } from 'ng-apexcharts';

@Component({
  selector: 'app-category-statistics',
  templateUrl: './category-statistics.component.html',
  styleUrls: ['./category-statistics.component.scss']
})
export class CategoryStatisticsComponent implements OnInit {
  public chartOptions: any;

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: 'Categories',
          data: [15,20,35]
        }
      ],
      chart: {
        type: 'bar',
        height: 350
      },
      xaxis: {
        categories: ['Cat1', 'Cat2', 'Cat3', 'Cat4', 'Cat5']
      },
      title: {
        text: 'Statistics of Categories',
        align: 'left'
      },
      dataLabels: {
        enabled: true
      }
    };
  }
}
