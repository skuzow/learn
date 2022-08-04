import { Component } from '@angular/core';


@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html'
})
export class SortComponent {

  inMayus: boolean = true;

  toggleMayus() {
    this.inMayus = !this.inMayus;
  }

}
