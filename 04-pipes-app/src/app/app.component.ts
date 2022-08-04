import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
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

}
