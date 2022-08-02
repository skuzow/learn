import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html'
})
export class ByCountryComponent {

  term: string = '';
  isError: boolean = false;

  constructor(private countriesService: CountriesService) { }

  search() {
    this.isError = false;
    this.countriesService.searchCountry(this.term)
      .subscribe(resp => {
        console.log(resp);
        this.term = '';
      }, err => {
        this.isError = true;
      });
  }

}
