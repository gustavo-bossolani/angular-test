import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import User from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input()
  users: User[];

  @Output('favoritado')
  emiter: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  favoritado(user: User): void {
    this.emiter.emit(user);
  }

}
