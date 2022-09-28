import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiKitchenDeliveryComponent } from './pages/ui-kitchen-delivery/ui-kitchen-delivery.component';
import { UiKitchenPickupComponent } from './pages/ui-kitchen-pickup/ui-kitchen-pickup.component';
import { UiKitchenRoomComponent } from './pages/ui-kitchen-room/ui-kitchen-room.component';
import { UiKitchenComponent } from './pages/ui-kitchen/ui-kitchen.component';

const routes: Routes = [
  {
    path: 'ui-kitchen',
    component: UiKitchenComponent
  },
  {
    path: 'ui-kitchen-room',
    component: UiKitchenRoomComponent
  },
  {
    path: 'ui-kitchen-delivery',
    component: UiKitchenDeliveryComponent
  },
  {
    path: 'ui-kitchen-pickup',
    component: UiKitchenPickupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiKitchenRoutingModule { }
