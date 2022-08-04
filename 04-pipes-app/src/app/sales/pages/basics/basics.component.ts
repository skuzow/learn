import { Component } from '@angular/core';


@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  nameLower: string = 'alejandro';
  nameUpper: string = 'ALEJANDRO';
  nameComplete: string = 'aLeJandRO poRrAs';
  date: Date = new Date();

}
