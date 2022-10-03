import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ui-planning',
  templateUrl: './ui-planning.component.html',
  styleUrls: ['./ui-planning.component.scss']
})
export class UiPlanningComponent implements OnInit {

  constructor(private meta: Meta) {
    setTimeout(() => {
      this.meta.updateTag(
        { name: 'theme-color', content: '#1a73d7' }
      )
    }, 100)
  }


  ngOnInit(): void {
  }

}
