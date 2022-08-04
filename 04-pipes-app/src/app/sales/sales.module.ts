import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { UncommonComponent } from './pages/uncommon/uncommon.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortComponent } from './pages/sort/sort.component';

import { MayusPipe } from './pipes/mayus.pipe';


@NgModule({
  declarations: [
    NumbersComponent,
    UncommonComponent,
    BasicsComponent,
    SortComponent,
    MayusPipe
  ],
  exports: [
    NumbersComponent,
    UncommonComponent,
    BasicsComponent,
    SortComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
