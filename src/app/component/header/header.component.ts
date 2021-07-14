import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string | null = null;
  constructor() {}

  ngOnInit(): void {}

  openMenu: boolean = false;

  openSidebar() {
    this.openMenu = true;
  }

  closeSidebar() {
    this.openMenu = false;
  }
}
