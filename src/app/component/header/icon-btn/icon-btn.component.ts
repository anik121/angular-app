import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-icon-btn',
  templateUrl: './icon-btn.component.html',
  styleUrls: ['./icon-btn.component.scss'],
})
export class IconBtnComponent implements OnInit {
  @Input() icon: any;

  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.icon = this.sanitizer.bypassSecurityTrustHtml(this.icon);
  }
  activeMenu: boolean = false;

  onActiveMenu() {
    this.activeMenu = !this.activeMenu;
    console.log(this.activeMenu);
  }
}
