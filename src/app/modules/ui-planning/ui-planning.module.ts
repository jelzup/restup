import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiPlanningRoutingModule } from './ui-planning-routing.module';
import { UiPlanningComponent } from './pages/ui-planning/ui-planning.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UiPlanningComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UiPlanningRoutingModule
  ]
})
export class UiPlanningModule { }
