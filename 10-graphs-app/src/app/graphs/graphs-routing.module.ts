import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { BarsDoubleComponent } from './pages/bars-double/bars-double.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bars',
        component: BarsComponent
      },
      {
        path: 'bars-double',
        component: BarsDoubleComponent
      },
      {
        path: 'dona',
        component: DonaComponent
      },
      {
        path: 'dona-http',
        component: DonaHttpComponent
      },
      {
        path: '**',
        redirectTo: 'bars'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class GraphsRoutingModule { }
