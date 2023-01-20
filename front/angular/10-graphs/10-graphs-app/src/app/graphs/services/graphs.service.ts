import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GraphsService {

  constructor(private http: HttpClient) { }

  public getSocialNetworkUsers() {
    return this.http.get('http://localhost:3000/graph');
  }

  public getSocialNetworkUsersData() {
    return this.http.get('http://localhost:3000/graph')
      .pipe(
        delay(500),
        map(data => {
          const labels = Object.keys(data);
          const values = Object.values(data);
          return { labels, values }
        })
      );
  }

}
