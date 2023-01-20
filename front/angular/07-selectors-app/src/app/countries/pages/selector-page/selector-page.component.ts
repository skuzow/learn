import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';

import { CountriesService } from '../../services/countries.service';
import { CountrySmall } from '../../interfaces/countries.interface';


@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html'
})
export class SelectorPageComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    region: [ '', Validators.required ],
    country: [ '', Validators.required ],
    frontier: [ '', Validators.required ]
  });

  regions: string[] = [];
  countries: CountrySmall[] = [];
  frontiers: CountrySmall[] = [];
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private cs: CountriesService
  ) { }

  ngOnInit(): void {
    this.regions = this.cs.regions;
    // country
    this.myForm.get('region')?.valueChanges
      .pipe(
        tap(() => {
          this.myForm.get('country')?.reset('');
          this.loading = true;
        }),
        switchMap(region => this.cs.getCountriesbyRegion(region))
      )
      .subscribe(countries => {
        this.countries = countries || [];
        this.loading = false;
      });
    // frontier
    this.myForm.get('country')?.valueChanges
      .pipe(
        tap(() => {
          this.myForm.get('frontier')?.reset('');
          this.loading = true;
        }),
        switchMap(code => this.cs.getCountrybyCode(code)),
        switchMap(country => {
          if (!country) return [];
          return this.cs.getCountriesbyCodes(country[0].borders);
        })
      )
      .subscribe(countries => {
        this.frontiers = countries;
        this.loading = false;
      });
  }

  save() {
    console.log(this.myForm.value);
  }

}
