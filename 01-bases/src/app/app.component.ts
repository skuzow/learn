import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  title: string = 'App Counter';
  number: number = 10;
  base: number = 5;

  accumulate(value: number) {
    this.number += value;
  }

}
