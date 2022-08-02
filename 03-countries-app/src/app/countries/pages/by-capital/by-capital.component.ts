import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html'
})
export class ByCapitalComponent {

  term: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  search(term: string) {
    this.isError = false;
    this.term = term;
    if (this.term === '') return;
    this.countriesService.searchCapital(this.term)
      .subscribe(countries => {
        this.countries = countries;
        this.term = '';
      }, err => {
        this.countries = [];
        this.isError = true;
      });
  }

}
