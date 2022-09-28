import { Component, HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OrdersPendingService } from 'src/app/services/orders-pending/orders-pending.service';

@Component({
  selector: 'app-ui-kitchen',
  templateUrl: './ui-kitchen.component.html',
  styleUrls: ['./ui-kitchen.component.scss']
})
export class UiKitchenComponent implements OnInit {
  orders: any[] = [];
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

  constructor(private ordersPendingService: OrdersPendingService) { }

  ngOnInit(): void {
    this.getOrdersPending();
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

  getOrdersPending() {
    this.subscription = this.ordersPendingService.getOrdersPending().pipe(
      catchError(error => {
        return throwError(error);
      })
    ).subscribe(orders => {
      console.log('orders', orders)
      this.orders = orders;
    })
  }
}
