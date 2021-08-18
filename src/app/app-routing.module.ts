import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingHistoryComponent } from './pages/booking-history/booking-history.component';
import { HomeComponent } from './pages/home/home.component';
import { HotelDetailsComponent } from './pages/hotel-details/hotel-details.component';
import { MapLocationComponent } from './pages/map-location/map-location.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { UserSettingComponent } from './pages/user-setting/user-setting.component';
import { FoodListComponent } from './pages/food-list/food-list.component';
import { AccountComponent } from './pages/user-setting/account/account.component';
import { FeedbackComponent } from './pages/user-setting/feedback/feedback.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'booking_history',
    component: BookingHistoryComponent,
  },
  {
    path: 'hotel_details',
    component: HotelDetailsComponent,
  },
  {
    path: 'user_setting',
    children: [
      { path: '', component: UserSettingComponent },
      { path: ':id/account', component: AccountComponent },
      { path: ':id/feedback', component: FeedbackComponent },
    ],
  },
  {
    path: 'food-list',
    component: FoodListComponent,
  },
  {
    path: 'map/:id',
    component: MapLocationComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
