import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiKitchenRoutingModule } from './ui-kitchen-routing.module';
import { UiKitchenComponent } from './pages/ui-kitchen/ui-kitchen.component';
import { SharedModule } from '../shared/shared.module';
import { UiKitchenDeliveryComponent } from './pages/ui-kitchen-delivery/ui-kitchen-delivery.component';
import { UiKitchenRoomComponent } from './pages/ui-kitchen-room/ui-kitchen-room.component';
import { UiKitchenPickupComponent } from './pages/ui-kitchen-pickup/ui-kitchen-pickup.component';
import { CategoryTabsComponent } from './components/category-tabs/category-tabs.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CardTicketComponent } from './components/card-ticket/card-ticket.component';
import { BottomNavbarKitchenComponent } from './components/bottom-navbar-kitchen/bottom-navbar-kitchen.component';


@NgModule({
  declarations: [
    UiKitchenComponent,
    UiKitchenDeliveryComponent,
    UiKitchenRoomComponent,
    UiKitchenPickupComponent,
    CardTicketComponent,
    CategoryTabsComponent,
    HeaderComponent,
    BottomNavbarKitchenComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    SharedModule,
    UiKitchenRoutingModule
  ]
})
export class UiKitchenModule { }
