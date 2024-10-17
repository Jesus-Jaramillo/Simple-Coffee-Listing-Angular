import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
