import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html'
})
export class ByCountryComponent {

  term: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  search(term: string) {
    this.isError = false;
    this.term = term;
    if (this.term === '') return;
    this.countriesService.searchCountry(this.term)
      .subscribe(countries => {
        this.countries = countries;
        this.term = '';
      }, err => {
        this.countries = [];
        this.isError = true;
      });
  }

  suggestions(term: string) {
    this.isError = false;
    // TODO: make suggestions
  }

}
