import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private meta: Meta) {
    setTimeout(() => {
      this.meta.updateTag(
        { name: 'theme-color', content: '#f8f9fa' }
      )
    }, 100)
  }

  ngOnInit(): void {
  }

  goto() {
    return this.router.navigate(['home']);
  }

}
