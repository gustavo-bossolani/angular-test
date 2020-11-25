import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { AgmCoreModule } from '@agm/core';

import { UserCardComponent } from './user-card.component';
import { UserCardBodyComponent } from './user-card-body/user-card-body.component';

@NgModule({
  declarations: [
    UserCardBodyComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatTabsModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyAZLKVkKI_c5HhVTHyUkIHwYBXmWG75FUo' })
  ],
  exports: [
    UserCardBodyComponent,
    UserCardComponent
  ]
})
export class UserCardModule { }
