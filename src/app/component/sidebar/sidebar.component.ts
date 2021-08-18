import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

interface Menu {
  id: number;
  title: string;
  icon: string;
  uri: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() openMenu: boolean = false;
  @Input() closeSidebar: any;
  public menus: Menu[] = [
    { id: 1, title: 'Home', icon: 'house', uri: '/' },
    { id: 2, title: 'Hotel List', icon: 'list-stars', uri: '/' },
    { id: 3, title: 'Food List', icon: 'egg', uri: '/food-list' },
    { id: 4, title: 'Settings', icon: 'gear', uri: '/setting' },
    { id: 5, title: 'About', icon: 'info-square', uri: '/' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
