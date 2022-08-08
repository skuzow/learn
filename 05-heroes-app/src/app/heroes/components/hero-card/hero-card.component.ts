import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';


@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
    `
      mat-card {
        margin-top: 20px;
      }
    `
  ]
})
export class HeroCardComponent {

  @Input('heroData') hero!: Hero;

}
