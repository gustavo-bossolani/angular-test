import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardBodyComponent } from './user-card-body.component';

describe('UserCardBodyComponent', () => {
  let component: UserCardBodyComponent;
  let fixture: ComponentFixture<UserCardBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
