import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingHistoryComponent } from './pages/booking-history/booking-history.component';
import { HomeComponent } from './pages/home/home.component';
import { MapLocationComponent } from './pages/map-location/map-location.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { UserSettingComponent } from './pages/user-setting/user-setting.component';

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
    path: 'user_setting',
    component: UserSettingComponent,
  },
  {
    path: 'map',
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
