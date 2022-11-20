import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphsRoutingModule } from './graphs-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { BarsDoubleComponent } from './pages/bars-double/bars-double.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';


@NgModule({
  declarations: [
    BarsComponent,
    BarsDoubleComponent,
    DonaComponent,
    DonaHttpComponent,
    BarGraphComponent
  ],
  imports: [
    CommonModule,
    GraphsRoutingModule
  ]
})
export class GraphsModule { }
