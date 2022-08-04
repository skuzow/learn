import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-uncommon',
  templateUrl: './uncommon.component.html'
})
export class UncommonComponent {

  // i18nSelect
  name: string = 'Alejandro';
  gender: string = 'masculine';
  inviteMap = {
    'masculine': 'invitarlo',
    'femenine': 'invitarla'
  }

  // i18nPlural
  customers: string[] = ['Alex', 'Lucía', 'Fernando', 'Eduardo'];
  customersMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  // keyvalue
  person = {
    name: 'Alex',
    age: 20,
    adress: 'Madrid, Spain'
  }

  // json
  heroes = [
    {
      name: 'Superman',
      fly: true
    },
    {
      name: 'Robin',
      fly: false
    },
    {
      name: 'Aquaman',
      fly: false
    },
    {
      name: 'Batman',
      fly: false
    }
  ];

  // async
  myObservable = interval(1000); // 0, 1, 2, 3, 4, 5, 6... 1000ms

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('We have promise data!');
    }, 3500)
  });

  // i18nSelect
  togglePerson() {
    this.name = 'Susana';
    this.gender = 'femenine';
  }

  // i18nPlural
  deleteCustomer() {
    this.customers.pop();
  }

}
