import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiServerDeliveryComponent } from './pages/ui-server-delivery/ui-server-delivery.component';
import { UiServerPickupComponent } from './pages/ui-server-pickup/ui-server-pickup.component';
import { UiServerRoomComponent } from './pages/ui-server-room/ui-server-room.component';
import { UiServerComponent } from './pages/ui-server/ui-server.component';

const routes: Routes = [
  {
    path: 'ui-server',
    component: UiServerComponent
  }, {
    path: 'ui-server-room',
    component: UiServerRoomComponent
  }, {
    path: 'ui-server-delivery',
    component: UiServerDeliveryComponent
  }, {
    path: 'ui-server-pickup',
    component: UiServerPickupComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiServerRoutingModule { }
