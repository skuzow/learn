import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html'
})
export class BarsComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    }
  }
  
  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#D5A1F8' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#ACA8F0' },
      { data: [ 15, 33, 70, 59, 100, 10, 25 ], label: 'Series C', backgroundColor: '#A1CBF8' }
    ]
  }

  public randomize(): void {
    for (let i = 0; i < 3; i++) {
      this.barChartData.datasets[i].data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)
      ];
    }
    this.chart?.update();
  }

}
