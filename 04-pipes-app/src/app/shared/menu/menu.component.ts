import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Texts & Dates',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: '/numbers'
          },
          {
            label: 'Uncommon',
            icon: 'pi pi-globe',
            routerLink: '/uncommon'
          }
        ]
      },
      {
        label: 'Customized Pipes',
        icon: 'pi pi-cog',
        routerLink: '/sort'
      }
    ];
  }

}
