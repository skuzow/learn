import { Component } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-bars-double',
  templateUrl: './bars-double.component.html'
})
export class BarsDoubleComponent {

  private providersLabels: string[] = [ '2021', '2022','2023','2024','2025' ];

  public providersData: ChartData<'bar'> = {
    labels: this.providersLabels,
    datasets: [
      { data: [ 100,200,300,400,500 ], label: 'Seller A' },
      { data: [ 50,250,30, 450,200 ], label: 'Seller B' }
    ]
  };

  public productData: ChartData<'bar'> = {
    labels: this.providersLabels,
    datasets: [
      { data: [ 200, 300,400,300, 100 ], label: 'cart', backgroundColor: 'lightblue' }
    ]
  };

}
