import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CountriesService } from '../../services/countries.service';
import { CountrySmall } from '../../interfaces/countries.interface';


@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html'
})
export class SelectorPageComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    region: [ '', Validators.required ],
    country: [ '', Validators.required ]
  });

  regions: string[] = [];
  countries: CountrySmall[] = [];

  constructor(
    private fb: FormBuilder,
    private cs: CountriesService
  ) { }

  ngOnInit(): void {
    this.regions = this.cs.regions;
    this.myForm.get('region')?.valueChanges
      .subscribe(region => {
        this.cs.getCountriesbyRegion(region)
          .subscribe(countries => {
            this.countries = countries;
          });
      });
  }

  save() {
    console.log(this.myForm.value);
    console.log(this.countries);
  }

}
