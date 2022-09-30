import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiPlanningComponent } from './pages/ui-planning/ui-planning.component';

const routes: Routes = [
  {
    path: 'ui-planning',
    component: UiPlanningComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiPlanningRoutingModule { }
