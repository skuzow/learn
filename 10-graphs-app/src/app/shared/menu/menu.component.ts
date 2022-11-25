import { Component } from '@angular/core';


interface MenuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class MenuComponent {

  menu: MenuItem[] = [
    {
      name: 'Bars',
      route: '/graphs/bars'
    },
    {
      name: 'Bars Double',
      route: '/graphs/bars-double'
    },
    {
      name: 'Dona',
      route: '/graphs/dona'
    },
    {
      name: 'Dona Http',
      route: '/graphs/dona-http'
    }
  ]

}
