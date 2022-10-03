import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showSidebar = false;
  constructor(@Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2, private meta: Meta) {
    setTimeout(() => {
      this.meta.updateTag(
        { name: 'theme-color', content: '#1a73d7' }
      )
    }, 100)
  }

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
