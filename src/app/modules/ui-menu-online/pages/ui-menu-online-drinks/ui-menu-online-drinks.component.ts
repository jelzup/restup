import { Component, HostListener, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-ui-menu-online-drinks',
  templateUrl: './ui-menu-online-drinks.component.html',
  styleUrls: ['./ui-menu-online-drinks.component.scss']
})
export class UiMenuOnlineDrinksComponent implements OnInit {
  drinks: Product[] = [];
  mocktails: Product[] = [];
  hotDrinks: Product[] = [];
  selectedProduct: any;
  quantity: number = 1;
  carouselMultipleOptions: OwlOptions = {
    stagePadding: 32,
    loop: false,
    margin: 0,
    nav: false,
    items: 1,
    dots: true,
  }
  carouselSingleOptions: OwlOptions = {
    stagePadding: 30,
    loop: false,
    margin: 16,
    nav: false,
    items: 4,
    dots: true,
  }
  innerWidth: number = 0;
  showDialog = false;
  subscription: Subscription = new Subscription();

  constructor(private meta: Meta, private productService: ProductsService) {
    setTimeout(() => {
      this.meta.updateTag(
        { name: 'theme-color', content: '#0e0f11' }
      )
    }, 100)
  }

  ngOnInit(): void {
    this.getDrinks();
    this.onResize();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.innerWidth = window.innerWidth;
    console.log('this.innerWidth', this.innerWidth)
    if (this.isDesktop()) {
      this.carouselMultipleOptions.items = 4;
    }
    if (this.isLargeTablet()) {
      this.carouselMultipleOptions.items = 3;
    }
    if (this.isTablet()) {
      this.carouselMultipleOptions.items = 2;
    }
    if (this.isMobile()) {
      this.carouselMultipleOptions.items = 1;
    }
  }

  isDesktop(): boolean {
    return this.innerWidth > 1180;
  }

  isLargeTablet(): boolean {
    return this.innerWidth <= 1180;
  }

  isTablet(): boolean {
    return this.innerWidth <= 830;
  }

  isMobile(): boolean {
    return this.innerWidth <= 500;
  }

  getDrinks() {
    this.subscription = this.productService.getDrinks().pipe(
      catchError(error => {
        return throwError(error);
      })
    ).subscribe(products => {
      this.drinks = products.filter(product => product.category === 'drinks');
      this.mocktails = products.filter(product => product.category === 'mocktails');
      this.hotDrinks = products.filter(product => product.category === 'hot drinks');
    })
  }

  isLoading() {
    return this.subscription && !this.subscription.closed;
  }
}
