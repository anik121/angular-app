import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SliderService } from 'src/app/service/slider.service';
interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  description: string;
  imgPath: string;
  map: string;
}
@Component({
  selector: 'app-map-location',
  templateUrl: './map-location.component.html',
  styleUrls: ['./map-location.component.scss'],
})
export class MapLocationComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private _hotelService: SliderService,
    private sanitizer: DomSanitizer,
  ) {}

  hotel_map: SafeUrl = {};
  single_hotel: Hotel[] = [];

  ngOnInit(): void {
    // this.route.snapshot.params.id
    this._hotelService.getHotel().subscribe((hotel) => {
      this.single_hotel = hotel as never;
    });
    let filterData = this.single_hotel.filter(
      (hotel) => hotel.id == this.route.snapshot.params.id,
    );
    this.hotel_map = this.sanitizer.bypassSecurityTrustResourceUrl(
      filterData[0].map,
    );
  }
}
