import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/service/slider.service';
interface User {
  id: number;
  name: string;
  email: string;
  location: string;
  avatar: string;
}
@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.scss'],
})
export class UserSettingComponent implements OnInit {
  users: User[] = [];
  constructor(private _userService: SliderService) {}

  ngOnInit(): void {
    this._userService.getUser().subscribe((user) => (this.users = user));
  }
}
