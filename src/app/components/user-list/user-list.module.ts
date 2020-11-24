import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

import { UserListComponent } from './user-list.component';
import { UserCardComponent } from './user-card/user-card.component';

import { AgmCoreModule } from '@agm/core';
import { UserListService } from './user-list.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    UserListComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    HttpClientModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyAZLKVkKI_c5HhVTHyUkIHwYBXmWG75FUo' })
  ],
  exports: [
    UserListComponent
  ],
  providers: [
    UserListService,
  ]
})
export class UserListModule { }
