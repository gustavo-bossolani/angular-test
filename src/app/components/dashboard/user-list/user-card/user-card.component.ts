import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import User from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input()
  user: User;

  @Output('favoritado')
  emiter: EventEmitter<User> = new EventEmitter();

  renderMaps = false;

  constructor() { }

  ngOnInit(): void { }

  favoritar(): void {
    this.emiter.emit(this.user);
  }

  parse(data: string): number {
    return Number(data);
  }

  teste(event): void {
    console.log(event);
  }

}
