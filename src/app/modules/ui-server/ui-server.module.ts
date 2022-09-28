import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiServerRoutingModule } from './ui-server-routing.module';
import { UiServerComponent } from './pages/ui-server/ui-server.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './components/header/header.component';
import { CategoryTabsComponent } from './components/category-tabs/category-tabs.component';
import { UiServerDeliveryComponent } from './pages/ui-server-delivery/ui-server-delivery.component';
import { UiServerPickupComponent } from './pages/ui-server-pickup/ui-server-pickup.component';
import { UiServerRoomComponent } from './pages/ui-server-room/ui-server-room.component';
import { CardTicketComponent } from './components/card-ticket/card-ticket.component';


@NgModule({
  declarations: [
    UiServerComponent,
    HeaderComponent,
    CategoryTabsComponent,
    CardTicketComponent,
    UiServerDeliveryComponent,
    UiServerPickupComponent,
    UiServerRoomComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule,
    UiServerRoutingModule
  ]
})
export class UiServerModule { }
