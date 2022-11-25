import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Category } from './models/category';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly categoriesUrl = `http://localhost:3000/categories`;

  constructor(private http: HttpClient) {}

  getCategories$() {
    return this.http
      .get<apiCategories>(this.categoriesUrl)
      .pipe(map((apiResponse) => apiResponse));
  }
}
type apiCategories = Category[];
