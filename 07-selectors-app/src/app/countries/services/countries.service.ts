import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CountrySmall } from '../interfaces/countries.interface';


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

  getCountriesbyRegion(region: string): Observable<CountrySmall[]> {
    const url = `${this._apiUrl}/region/${region}`;
    const httpParams = new HttpParams().set('fields', 'name,cca3');
    return this.http.get<CountrySmall[]>(url, { params: httpParams });
  }

}
