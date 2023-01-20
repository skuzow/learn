import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BasicsComponent } from './cheatsheets/pages/basics/basics.component';
import { NumbersComponent } from './cheatsheets/pages/numbers/numbers.component';
import { UncommonComponent } from './cheatsheets/pages/uncommon/uncommon.component';
import { SortComponent } from './cheatsheets/pages/sort/sort.component';


const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'uncommon',
    component: UncommonComponent
  },
  {
    path: 'sort',
    component: SortComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
