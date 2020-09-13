import { Article } from './models/article.model';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articles } from './models/articles.model';
const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  currentArticle: Article;
  constructor(private _http: HttpClient) { }
  getData(url): Observable<Articles> {
    return this._http.get<Articles>(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
}
