import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/service/slider.service';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);
interface Slider {
  id: number;
  imgPath: string;
  title: string;
}

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss'],
})
export class HomeSliderComponent implements OnInit {
  sliders: Slider[] = [];

  constructor(private _sliderService: SliderService) {}

  ngOnInit(): void {
    this._sliderService
      .getSlider()
      .subscribe((slider) => (this.sliders = slider));
  }
}
