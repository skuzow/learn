import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];

  get history(): string[] {
    return [...this._history];
  }

  searchGifs(query: string = '') {
    if (query === '') return;
    query = query.trim().toLocaleLowerCase();
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
    }
  }

}
