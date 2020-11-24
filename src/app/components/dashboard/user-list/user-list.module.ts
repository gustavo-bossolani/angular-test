import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { AgmCoreModule } from '@agm/core';

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
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyAZLKVkKI_c5HhVTHyUkIHwYBXmWG75FUo' })
  ],
  exports: [
    UserListComponent,
    UserCardComponent
  ]
})
export class UserListModule { }
