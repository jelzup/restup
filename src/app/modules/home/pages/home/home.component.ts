import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta) {
    setTimeout(() => {
      this.meta.updateTag(
        { name: 'theme-color', content: '#4866d2' }
      )
    }, 100)
  }

  ngOnInit(): void {
  }

}
