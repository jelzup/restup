import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-navbar-kitchen',
  templateUrl: './bottom-navbar-kitchen.component.html',
  styleUrls: ['./bottom-navbar-kitchen.component.scss']
})
export class BottomNavbarKitchenComponent implements OnInit {
  @Input() showBottomNavbar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
