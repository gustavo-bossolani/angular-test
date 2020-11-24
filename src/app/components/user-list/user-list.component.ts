import { UserListService } from './user-list.service';
import { Component, OnInit } from '@angular/core';

import User from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(
    private service: UserListService
  ) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(users => {
      this.users = users;
    });

  }

}
