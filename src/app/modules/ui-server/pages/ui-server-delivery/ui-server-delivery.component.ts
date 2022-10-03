import { Component, HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { OrdersPendingService } from 'src/app/services/orders-pending/orders-pending.service';
import { Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ui-server-delivery',
  templateUrl: './ui-server-delivery.component.html',
  styleUrls: ['./ui-server-delivery.component.scss']
})
export class UiServerDeliveryComponent implements OnInit {
  orders: any[] = [];
  selectedProduct: any;
  carouselMultipleOptions: OwlOptions = {
    stagePadding: 32,
    loop: false,
    margin: 0,
    nav: false,
    items: 1,
    dots: true,
  }
  innerWidth: number = 0;
  subscription: Subscription = new Subscription();

  constructor(private ordersPendingService: OrdersPendingService, private meta: Meta) {
    setTimeout(() => {
      this.meta.updateTag(
        { name: 'theme-color', content: '#209bce' }
      )
    }, 100)
  }

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
      this.orders = orders.filter(order => order.type === 'en livraison' && order.status !== 'en cours' && order.status !== '');
    })
  }

  isLoading() {
    return this.subscription && !this.subscription.closed;
  }
}
