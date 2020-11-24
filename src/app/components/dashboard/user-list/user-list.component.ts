import { Component, Input, OnInit } from '@angular/core';

import User from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input()
  users: User[];

  constructor() { }

  ngOnInit(): void { }

  favoritado(event: any): void {
    console.log(event);
  }

}
