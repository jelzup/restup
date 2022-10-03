import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav-mobile',
  templateUrl: './header-nav-mobile.component.html',
  styleUrls: ['./header-nav-mobile.component.scss']
})
export class HeaderNavMobileComponent implements OnInit {
  @Input() title: string = '';
  @Input() quantity: number = 0;
  @Input() icon: string = '';
  @Input() showCart: boolean = true;
  @Input() showHome: boolean = true;
  sticky = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onWindowScroll(e: Event) {
    if (window.pageYOffset > 30) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
