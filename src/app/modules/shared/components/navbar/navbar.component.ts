import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() title: string = '';
  @Input() icon: string = '';

  showSidebar = false;
  constructor(@Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  openSidebar() {
    this.showSidebar = !this.showSidebar;
    if (this.showSidebar) {
      this.renderer.addClass(this.document.body, 'g-sidenav-pinned');
    } else {
      this.renderer.removeClass(this.document.body, 'g-sidenav-pinned');
    }
  }
}
