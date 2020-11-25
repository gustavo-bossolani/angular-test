import { Component, Input, OnInit, ViewChild } from '@angular/core';

import User from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-card-body',
  templateUrl: './user-card-body.component.html',
  styleUrls: ['./user-card-body.component.css']
})
export class UserCardBodyComponent implements OnInit {

  @Input()
  user: User;

  lat: number;
  lng: number;

  constructor() { }

  ngOnInit(): void {
    const{ lat, lng } = this.user.address.geo;
    this.lat = this.parse(lat);
    this.lng = this.parse(lng);
   }

  parse(data: string): number {
    return Number(data);
  }

  teste(a) {
    console.log(a);
  }

}
