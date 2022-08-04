import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  
  /*
  name: string = 'alejaNdro poRras';
  value: number = 3000;
  obj = {
    name: 'Alejandro'
  }

  show() {
    console.log(this.name);
    console.log(this.value);
    console.log(this.obj);
  }
  */

  constructor (private primeNGConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primeNGConfig.ripple = true; // circle when click animation
  }

}
