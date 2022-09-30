import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarConfigComponent } from './components/sidebar-config/sidebar-config.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeadTitleComponent } from './components/head-title/head-title.component';
import { QuantityComponent } from './components/quantity/quantity.component';
import { FormsModule } from '@angular/forms';
import { TitleMenuComponent } from './components/title-menu/title-menu.component';
import { SidebarCartComponent } from './components/sidebar-cart/sidebar-cart.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { LoaderComponent } from './components/loader/loader.component';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin, interactionPlugin, timeGridPlugin, resourceTimeGridPlugin
]);

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarConfigComponent,
    NavbarComponent,
    FooterComponent,
    HeadTitleComponent,
    QuantityComponent,
    TitleMenuComponent,
    SidebarCartComponent,
    CalendarComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FullCalendarModule,
    SharedRoutingModule
  ],
  exports: [
    SidebarComponent,
    SidebarConfigComponent,
    NavbarComponent,
    FooterComponent,
    HeadTitleComponent,
    QuantityComponent,
    TitleMenuComponent,
    SidebarCartComponent,
    CalendarComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
