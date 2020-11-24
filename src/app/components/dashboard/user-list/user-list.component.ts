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

  @Input()
  exibirFavoritos = false;

  @Output()
  onFavoritadoRemovido: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }



  favoritadoRemovido(data: boolean): void {
    this.onFavoritadoRemovido.emit(data);
  }

}
