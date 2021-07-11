import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/service/slider.service';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
interface Food {
  id: number;
  name: string;
  imgPath: string;
  location: string;
}

@Component({
  selector: 'app-home-top-food',
  templateUrl: './home-top-food.component.html',
  styleUrls: ['./home-top-food.component.scss'],
})
export class HomeTopFoodComponent implements OnInit {
  foods: Food[] = [];
  constructor(private _foodService: SliderService) {}

  ngOnInit(): void {
    this._foodService.getFood().subscribe((food) => (this.foods = food));
  }
}
