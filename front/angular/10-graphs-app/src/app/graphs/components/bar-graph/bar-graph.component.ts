import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';


@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html'
})
export class BarGraphComponent implements OnInit{

  @Input() horizontal: boolean = false;

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
  @Input() barChartData: ChartData<'bar'> = {
    labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#D5A1F8' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#ACA8F0' },
      { data: [ 15, 33, 70, 59, 100, 10, 25 ], label: 'Series C', backgroundColor: '#A1CBF8' }
    ]
  }

  public ngOnInit(): void {
    if (this.horizontal) {
      this.barChartType = 'line';
    }
  }

}
