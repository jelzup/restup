import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiMenuOnlineDessertsComponent } from './pages/ui-menu-online-desserts/ui-menu-online-desserts.component';
import { UiMenuOnlineDishesComponent } from './pages/ui-menu-online-dishes/ui-menu-online-dishes.component';
import { UiMenuOnlineDrinksComponent } from './pages/ui-menu-online-drinks/ui-menu-online-drinks.component';
import { UiMenuOnlineFormulesComponent } from './pages/ui-menu-online-formules/ui-menu-online-formules.component';
import { UiMenuOnlineComponent } from './pages/ui-menu-online/ui-menu-online.component';

const routes: Routes = [
  {
    path: 'ui-menu-online',
    component: UiMenuOnlineComponent
  },
  {
    path: 'ui-menu-online-dishes',
    component: UiMenuOnlineDishesComponent
  },
  {
    path: 'ui-menu-online-desserts',
    component: UiMenuOnlineDessertsComponent
  },
  {
    path: 'ui-menu-online-drinks',
    component: UiMenuOnlineDrinksComponent
  },
  {
    path: 'ui-menu-online-formules',
    component: UiMenuOnlineFormulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiMenuOnlineRoutingModule { }
