import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import User from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  baseUrl = 'https://jsonplaceholder.typicode.com/';
  localKey = 'data_favorites';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(uri: string = 'users'): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}${uri}`);
  }

  saveFavorite(user: User): void {
    const users = this.getFavorites();
    users.push(user);
    localStorage.setItem(this.localKey, JSON.stringify(users));
  }

  getFavorites(): User[] {
    return JSON.parse(localStorage.getItem(this.localKey));
  }
}
