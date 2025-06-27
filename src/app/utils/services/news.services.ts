import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { News,NewsApiResponse } from '../models/data';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl =
    'https://newsdata.io/api/1/latest?apikey=pub_53807ed2e69b4a5e977dca4020596183&q=srilanka&country=lk&language=si,en,ta&timezone=Asia/Colombo';

  private http = inject(HttpClient);
  constructor() {}

  getAllNews(): Observable<News[]> {
    return this.http.get<NewsApiResponse>(this.apiUrl).pipe(
      map(res=>res.results))
  }

}
