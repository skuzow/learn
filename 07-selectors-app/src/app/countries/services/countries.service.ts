import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CountrySmall } from '../interfaces/countries.interface';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private _regions: string[] = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];
  
  get regions(): string[] {
    return [ ...this._regions ];
  }

  constructor(private http: HttpClient) { }

  getCountriesbyRegion(region: string): Observable<CountrySmall[]> {
    return this.http.get<CountrySmall[]>(`${this.apiUrl}/region/${region}?fields=name,cca3`);
  }

}
