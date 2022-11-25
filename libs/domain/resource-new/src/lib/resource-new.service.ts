import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './models/category';
import { Resource } from './models/resource';
@Injectable({
  providedIn: 'root',
})
export class ResourceNewService {
  private readonly categoriesUrl = `http://localhost:3000/categories`;
  private readonly resourcesUrl = `http://localhost:3000/resources`;

  constructor(private http: HttpClient) {}

  getCategories$() {
    return this.http.get<Category[]>(this.categoriesUrl);
    // .pipe(map((result) => result));
  }
  postNewResource$(newResource: Resource) {
    return this.http.post<Resource>(`${this.resourcesUrl}/`, newResource);
    // .pipe(map((result) => result));
  }
}
