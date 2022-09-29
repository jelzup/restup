import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-menu',
  templateUrl: './title-menu.component.html',
  styleUrls: ['./title-menu.component.scss']
})
export class TitleMenuComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
