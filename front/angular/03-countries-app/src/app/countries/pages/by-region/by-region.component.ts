import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `
  ]
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  getCSSClass(region: string): string {
    return (region === this.activeRegion)
              ? 'btn btn-primary'
              : 'btn btn-outline-primary';
  }

  activateRegion(region: string) {
    if (region === this.activeRegion) return; // prevent loading if region selected again
    this.activeRegion = region;
    this.countries = [];
    this.countriesService.searchRegion(region)
      .subscribe(countries => this.countries = countries);
  }

}
