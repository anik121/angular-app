import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BookingHistoryComponent } from './pages/booking-history/booking-history.component';
import { UserSettingComponent } from './pages/user-setting/user-setting.component';
import { MapLocationComponent } from './pages/map-location/map-location.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HomeHeaderComponent } from './pages/home/home-header/home-header.component';
import { HomeSliderComponent } from './pages/home/home-slider/home-slider.component';
import { HomeTopFoodComponent } from './pages/home/home-top-food/home-top-food.component';
import { HomeBookingRestaurantComponent } from './pages/home/home-booking-restaurant/home-booking-restaurant.component';
import { HomeSearchComponent } from './pages/home/home-search/home-search.component';
import { SwiperModule } from 'swiper/angular';
import { SidebarComponent } from './component/sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BookingHistoryComponent,
    UserSettingComponent,
    MapLocationComponent,
    NotfoundComponent,
    HomeHeaderComponent,
    HomeSliderComponent,
    HomeTopFoodComponent,
    HomeBookingRestaurantComponent,
    HomeSearchComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
