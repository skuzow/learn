import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interface';


@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html'
})
export class SortComponent {

  inMayus: boolean = true;
  sortBy: string = '';
  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green
    },
    {
      name: 'Ironman',
      fly: true,
      color: Color.red
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    }
  ]

  toggleMayus() {
    this.inMayus = !this.inMayus;
  }

  changeSort(value: string) {
    this.sortBy = value;
  }

}
