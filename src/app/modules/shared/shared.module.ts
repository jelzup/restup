import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarConfigComponent } from './components/sidebar-config/sidebar-config.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeadTitleComponent } from './components/head-title/head-title.component';


@NgModule({
  declarations: [
    SidebarComponent,
    SidebarConfigComponent,
    NavbarComponent,
    FooterComponent,
    HeadTitleComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    SidebarComponent,
    SidebarConfigComponent,
    NavbarComponent,
    FooterComponent,
    HeadTitleComponent,
  ]
})
export class SharedModule { }
