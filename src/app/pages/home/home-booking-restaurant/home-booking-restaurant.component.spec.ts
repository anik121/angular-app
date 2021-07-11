import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBookingRestaurantComponent } from './home-booking-restaurant.component';

describe('HomeBookingRestaurantComponent', () => {
  let component: HomeBookingRestaurantComponent;
  let fixture: ComponentFixture<HomeBookingRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBookingRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBookingRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
