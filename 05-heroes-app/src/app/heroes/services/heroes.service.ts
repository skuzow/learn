import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';

import { Hero } from '../interfaces/heroes.interface';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.apiUrl}/heroes`);
  }

  getHeroeById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.apiUrl}/heroes/${id}`);
  }

}
