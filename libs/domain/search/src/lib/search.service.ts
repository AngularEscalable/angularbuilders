import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Resource } from './models/resource';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly resourcesUrl = `http://localhost:3000/resources`;

  constructor(private http: HttpClient) {}

  getResourceByQuery$(query: string) {
    return this.http.get<Resource[]>(`${this.resourcesUrl}`).pipe(
      //map((result) => result.data),
      map((resources) => resources.filter((r) => this.matchesQuery(r, query)))
    );
  }
  private matchesQuery(resource: Resource, query: string) {
    if (!query) return false;
    const cleanQuery = query.toLowerCase().trim();
    if (cleanQuery.length === 0) return false;
    if (resource.name?.toLowerCase().includes(cleanQuery)) return true;
    if (resource.description?.toLowerCase().includes(cleanQuery)) return true;
    return false;
  }
}
