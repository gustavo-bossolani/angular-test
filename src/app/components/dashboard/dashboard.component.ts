import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';

import User from 'src/app/shared/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: User[];
  favoriteUsers: User[];

  constructor(
    private service: DashboardService
  ) { }

  ngOnInit(): void {

    this.service.getUsers().subscribe(users => {
      this.users = users;
    });

  }

  loadFromStorage(): void {
    this.favoriteUsers = this.service.getFavorites();
  }

}
