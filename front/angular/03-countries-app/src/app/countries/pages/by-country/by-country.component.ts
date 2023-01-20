import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class ByCountryComponent {

  term: string = '';
  isError: boolean = false;
  showSuggestions: boolean = false;
  suggestedCountries: Country[] = [];
  countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  search(term: string) {
    this.showSuggestions = false;
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
    this.term = term;
    this.showSuggestions = true;
    this.countriesService.searchCountry(term)
      .subscribe(
        countries => this.suggestedCountries = countries.slice(0, 5),
        err => this.suggestedCountries = []
      );
  }

  searchSuggested(term: string) {
    this.search(term);
  }

}
