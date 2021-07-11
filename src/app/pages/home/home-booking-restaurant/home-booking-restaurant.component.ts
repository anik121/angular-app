import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/service/slider.service';
interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  description: string;
  imgPath: string;
}
@Component({
  selector: 'app-home-booking-restaurant',
  templateUrl: './home-booking-restaurant.component.html',
  styleUrls: ['./home-booking-restaurant.component.scss'],
})
export class HomeBookingRestaurantComponent implements OnInit {
  hotels: Hotel[] = [];
  constructor(private _hotelService: SliderService) {}

  ngOnInit(): void {
    this._hotelService.getHotel().subscribe((hotel) => (this.hotels = hotel));
  }
}
