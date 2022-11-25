import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Category } from './models/category';
import { Resource } from './models/resource';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly categoriesUrl = `http://localhost:3000/categories`;
  constructor(private http: HttpClient) {}
  getCategoryById$(categoryId: string) {
    return this.http
      .get<Category>(`${this.categoriesUrl}/${categoryId}`)
      .pipe(map((result) => result));
  }
  getResourcesByCategoryId$(categoryId: string) {
    return this.http
      .get<Resource[]>(`${this.categoriesUrl}/${categoryId}/resources`)
      .pipe(map((result) => result));
  }
}
