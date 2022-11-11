import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';

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

  private get _httpParams(): HttpParams {
    return new HttpParams().set('fields', 'name,cca3');
  }

  constructor(private http: HttpClient) { }

  getCountriesbyRegion(region: string): Observable<CountrySmall[] | null> {
    if (!region) return of(null);
    const url = `${this._apiUrl}/region/${region}`;
    return this.http.get<CountrySmall[]>(url, { params: this._httpParams });
  }

  getCountrybyCode(code: string): Observable<Country[] | null> {
    if (!code) return of(null);
    const url = `${this._apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url);
  }

  getCountriesbyCodes(codes: string[]): Observable<CountrySmall[]> {
    if (!codes) return of([]);
    const requests: Observable<CountrySmall>[] = [];
    codes.forEach(code => {
      const request = this._getCountrybyCodeSmall(code);
      requests.push(request);
    });
    return combineLatest(requests);
  }

  private _getCountrybyCodeSmall(code: string): Observable<CountrySmall> {
    const url = `${this._apiUrl}/alpha/${code}`;
    return this.http.get<CountrySmall>(url, { params: this._httpParams });
  }

}
