import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GraphsService {

  constructor(private http: HttpClient) { }

  public getSocialNetworkUsers() {
    return this.http.get('http://localhost:3000/graph');
  }

}
