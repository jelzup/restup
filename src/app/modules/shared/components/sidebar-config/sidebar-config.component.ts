import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-config',
  templateUrl: './sidebar-config.component.html',
  styleUrls: ['./sidebar-config.component.scss']
})
export class SidebarConfigComponent implements OnInit {
  showSidebar = false;
  constructor() { }

  ngOnInit(): void {
  }

  openSidebar() {
    return this.showSidebar = !this.showSidebar;
  }
}
