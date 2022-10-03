import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-navbar-kitchen-server',
  templateUrl: './bottom-navbar-kitchen-server.component.html',
  styleUrls: ['./bottom-navbar-kitchen-server.component.scss']
})
export class BottomNavbarKitchenServerComponent implements OnInit {
  @Input() showBottomNavbar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
