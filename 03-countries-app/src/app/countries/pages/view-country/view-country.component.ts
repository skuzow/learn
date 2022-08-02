import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html'
})
export class ViewCountryComponent implements OnInit {

  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    /* same but more complex
    this.activatedRoute.params
      .subscribe(({ id }) => {
        this.countriesService.getCountryByAlpha(id)
          .subscribe( resp => {
            console.log(resp[0]);
          })
      });
    */
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.getCountryByAlpha(id)),
        tap(console.log) // smart way for console printing
      )
      .subscribe(resp => this.country = resp[0]);
  }

}
