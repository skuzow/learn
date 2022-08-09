import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';

import { Hero } from '../interfaces/heroes.interface';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this._apiUrl}/heroes`);
  }

  getHeroeById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this._apiUrl}/heroes/${id}`);
  }

  getSuggestions(query: string): Observable<Hero[]> {
    const params = new HttpParams()
      .set('limit', '6')
      .set('q', query);
    return this.http.get<Hero[]>(`${this._apiUrl}/heroes`, {params});
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this._apiUrl}/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this._apiUrl}/heroes/${hero.id}`, hero);
  }

}
