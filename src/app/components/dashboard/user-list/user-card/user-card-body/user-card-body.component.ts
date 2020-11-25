import { Component, Input, OnInit } from '@angular/core';

import User from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-card-body',
  templateUrl: './user-card-body.component.html',
  styleUrls: ['./user-card-body.component.css']
})
export class UserCardBodyComponent implements OnInit {

  @Input()
  user: User;

  constructor() { }

  ngOnInit(): void { }


  parse(data: string): number {
    return Number(data);
  }

}
