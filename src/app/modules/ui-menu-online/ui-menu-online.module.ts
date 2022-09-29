import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiMenuOnlineRoutingModule } from './ui-menu-online-routing.module';
import { UiMenuOnlineComponent } from './pages/ui-menu-online/ui-menu-online.component';
import { CategoryTabsComponent } from './components/category-tabs/category-tabs.component';
import { HeaderComponent } from './components/header/header.component';
import { CardTicketComponent } from './components/card-ticket/card-ticket.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../shared/shared.module';
import { HeadComponent } from './components/head/head.component';
import { UiMenuOnlineDishesComponent } from './pages/ui-menu-online-dishes/ui-menu-online-dishes.component';
import { UiMenuOnlineDrinksComponent } from './pages/ui-menu-online-drinks/ui-menu-online-drinks.component';
import { UiMenuOnlineDessertsComponent } from './pages/ui-menu-online-desserts/ui-menu-online-desserts.component';
import { UiMenuOnlineFormulesComponent } from './pages/ui-menu-online-formules/ui-menu-online-formules.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    UiMenuOnlineComponent,
    CategoryTabsComponent,
    HeaderComponent,
    CardTicketComponent,
    HeadComponent,
    UiMenuOnlineDishesComponent,
    UiMenuOnlineDrinksComponent,
    UiMenuOnlineDessertsComponent,
    UiMenuOnlineFormulesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule,
    SweetAlert2Module.forRoot(),
    UiMenuOnlineRoutingModule
  ]
})
export class UiMenuOnlineModule { }
