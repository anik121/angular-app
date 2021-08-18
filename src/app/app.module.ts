import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { HotelDetailsComponent } from './pages/hotel-details/hotel-details.component';
import { FoodListComponent } from './pages/food-list/food-list.component';
import { AccountComponent } from './pages/user-setting/account/account.component';
import { FeedbackComponent } from './pages/user-setting/feedback/feedback.component';
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
    HotelDetailsComponent,
    FoodListComponent,
    AccountComponent,
    FeedbackComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
