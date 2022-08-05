import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { UncommonComponent } from './pages/uncommon/uncommon.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortComponent } from './pages/sort/sort.component';

import { FlyPipe } from './pipes/fly.pipe';
import { MayusPipe } from './pipes/mayus.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ColorPipe } from './pipes/color.pipe';


@NgModule({
  declarations: [
    NumbersComponent,
    UncommonComponent,
    BasicsComponent,
    SortComponent,
    FlyPipe,
    MayusPipe,
    SortPipe,
    ColorPipe
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
