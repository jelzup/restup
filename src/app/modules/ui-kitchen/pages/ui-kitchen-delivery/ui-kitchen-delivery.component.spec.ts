import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitchenDeliveryComponent } from './ui-kitchen-delivery.component';

describe('UiKitchenDeliveryComponent', () => {
  let component: UiKitchenDeliveryComponent;
  let fixture: ComponentFixture<UiKitchenDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiKitchenDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiKitchenDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
