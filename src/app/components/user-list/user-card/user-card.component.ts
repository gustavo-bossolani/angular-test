import { Component, Input, OnInit } from '@angular/core';

import User from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {


  @Input()
  user: User;

  renderMaps: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  favoritar(): void {
    console.log('sou o mais novo favorito');
  }

  parse(data: string): number {
    return Number(data);
  }

  teste(event) {
    console.log(event)
  }

}
