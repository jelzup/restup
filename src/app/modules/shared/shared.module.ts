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


@NgModule({
  declarations: [
    SidebarComponent,
    SidebarConfigComponent,
    NavbarComponent,
    FooterComponent,
    HeadTitleComponent,
    QuantityComponent,
    TitleMenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule
  ],
  exports: [
    SidebarComponent,
    SidebarConfigComponent,
    NavbarComponent,
    FooterComponent,
    HeadTitleComponent,
    QuantityComponent,
    TitleMenuComponent
  ]
})
export class SharedModule { }
