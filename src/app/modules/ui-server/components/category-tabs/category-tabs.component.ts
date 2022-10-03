import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-tabs',
  templateUrl: './category-tabs.component.html',
  styleUrls: ['./category-tabs.component.scss']
})
export class CategoryTabsComponent implements OnInit {
  @Input() showTabs: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
