import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CountrySmall, Country } from '../interfaces/countries.interface';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _apiUrl: string = 'https://restcountries.com/v3.1';
  private _regions: string[] = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];
  
  get regions(): string[] {
    return [ ...this._regions ];
  }

  constructor(private http: HttpClient) { }

  getCountriesbyRegion(region: string): Observable<CountrySmall[] | null> {
    if (!region) return of(null);
    const url = `${this._apiUrl}/region/${region}`;
    const httpParams = new HttpParams().set('fields', 'name,cca3');
    return this.http.get<CountrySmall[]>(url, { params: httpParams });
  }

  getCountrybyCode(code: string): Observable<Country[] | null> {
    if (!code) return of(null);
    const url = `${this._apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url);
  }

}
