import { UserListComponent } from './user-list/user-list.component';
import { UserListModule } from './user-list/user-list.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';

import { DashboardService } from './dashboard.service';
import { DashboardComponent } from './dashboard.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MatTabsModule,
    UserListModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyAZLKVkKI_c5HhVTHyUkIHwYBXmWG75FUo' })
  ],
  providers: [
    DashboardService
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
