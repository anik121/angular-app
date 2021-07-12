import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SLIDER } from '../mock/mock-slider';
import { FOOD } from '../mock/mock-food';
import { HOTEL } from '../mock/mock-hotel';
import { USER } from '../mock/mock-user';
interface Slider {
  id: number;
  imgPath: string;
  title: string;
}
interface Food {
  id: number;
  name: string;
  imgPath: string;
  location: string;
}
interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  description: string;
  imgPath: string;
}
interface User {
  id: number;
  name: string;
  email: string;
  location: string;
  avatar: string;
}
@Injectable({
  providedIn: 'root',
})
export class SliderService {
  constructor() {}
  getSlider(): Observable<Slider[]> {
    const sliders = of(SLIDER);
    return sliders;
  }
  getFood(): Observable<Food[]> {
    const foods = of(FOOD);
    return foods;
  }
  getHotel(): Observable<Hotel[]> {
    const hotel = of(HOTEL);
    return hotel;
  }
  getUser(): Observable<User[]> {
    const user = of(USER);
    return user;
  }
}
