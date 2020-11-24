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

  saveFavorite(user: User): boolean {
    const users = this.getFavorites();

    const repeatedUser = users.find(({ id }: User) => id === user.id);
    if (repeatedUser) {
      return false;
    };

    users.push(user);
    localStorage.setItem(this.localKey, JSON.stringify(users));
    return true;
  }

  getFavorites(): User[] {
    return JSON.parse(localStorage.getItem(this.localKey)) || [];
  }

  removerFavorito(user: User): void {
    const users = this.getFavorites();

    const getUser = users.find(({ id }: User) => id === user.id);
    if (getUser) {
      const index = users.indexOf(getUser);
      users.splice(index, 1);
      localStorage.setItem(this.localKey, JSON.stringify(users));
    };
  }
}
