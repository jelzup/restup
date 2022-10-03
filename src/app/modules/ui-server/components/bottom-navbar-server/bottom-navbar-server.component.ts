import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-navbar-server',
  templateUrl: './bottom-navbar-server.component.html',
  styleUrls: ['./bottom-navbar-server.component.scss']
})
export class BottomNavbarServerComponent implements OnInit {
  @Input() showBottomNavbar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
