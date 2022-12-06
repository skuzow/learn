import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html'
})
export class DonaComponent {

  private colors: string[] = [ '#B24EF2', '#5F55E6', '#4E9AF2' ]

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ],
    datasets: [
      { data: [ 350, 450, 100 ], backgroundColor: this.colors },
      { data: [ 50, 150, 120 ], backgroundColor: this.colors },
      { data: [ 250, 130, 70 ], backgroundColor: this.colors }
    ]
  };

}
