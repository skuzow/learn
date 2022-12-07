import { Component, OnInit } from '@angular/core';
import { ChartType, ChartData, ChartDataset } from 'chart.js';
import { GraphsService } from '../../services/graphs.service';


@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html'
})
export class DonaHttpComponent implements OnInit {

  constructor(private gs: GraphsService) { }

  private colors: string[] = [ '#3AB0FA', '#33C9DE', '#44F5D9', '#33DE94', '#3AFA70' ];
  public data: ChartDataset<"doughnut", number[]>[] = [];

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: this.data
  };

  public ngOnInit(): void {
    /* old
    this.gs.getSocialNetworkUsers()
      .subscribe(data => {
        this.doughnutChartData.labels = Object.keys(data);
        this.data.push({
          data: Object.values(data),
          backgroundColor: this.colors
        });
      });
    */
    this.gs.getSocialNetworkUsersData()
      .subscribe(({ labels, values }) => {
        this.doughnutChartData.labels = labels;
        this.data.push({
          data: values,
          backgroundColor: this.colors
        });
      });
  }

}
