import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country.interface';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this._apiUrl}/name/${term}`
    return this.http.get<Country[]>(url);
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this._apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url);
  }

  getCountryByAlpha(id: string): Observable<Country[]> {
    const url = `${this._apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

}
