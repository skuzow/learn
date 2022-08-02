import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey: string = 'ZGQMZaqyO3NIfx6Ixu0WoV11RuQqXjCa';
  private _urlService: string = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = [];

  public results: Gif[] = [];

  get history(): string[] {
    return [...this._history];
  }

  constructor (private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  searchGifs(query: string = '') {
    if (query === '') return;
    query = query.trim().toLocaleLowerCase();
    // history
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
      localStorage.setItem('history', JSON.stringify(this._history));
    }
    // search
    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', query);
    this.http.get<SearchGifsResponse>(`${this._urlService}/search`, {params})
      .subscribe((response) => {
        this.results = response.data;
        localStorage.setItem('results', JSON.stringify(response.data));
      });
  }

}
