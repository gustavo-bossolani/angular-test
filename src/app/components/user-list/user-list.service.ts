import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import User from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

}
