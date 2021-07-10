import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss'],
})
export class TaskHeaderComponent implements OnInit {
  title: string = 'Tasks';
  subtitle: string = 'G-Track';
  constructor() {}

  ngOnInit(): void {}

  activeMenu: boolean = false;
  searchMenu: boolean = false;
  filterMenu: boolean = false;
  onActiveMenu() {
    this.activeMenu = !this.activeMenu;
    this.searchMenu = false;
    this.filterMenu = false;
  }
  onSearchMenu() {
    this.activeMenu = false;
    this.searchMenu = !this.searchMenu;
    this.filterMenu = false;
  }
  onFilterMenu() {
    this.activeMenu = false;
    this.searchMenu = false;
    this.filterMenu = !this.filterMenu;
  }
}
