import { UserCardModule } from './user-card/user-card.module';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list.component';
import { UserCardComponent } from './user-card/user-card.component';

import { UserCardBodyComponent } from './user-card/user-card-body/user-card-body.component';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserCardModule
  ],
  exports: [
    UserListComponent
  ]
})
export class UserListModule { }
