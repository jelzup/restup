import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitchenPickupComponent } from './ui-kitchen-pickup.component';

describe('UiKitchenPickupComponent', () => {
  let component: UiKitchenPickupComponent;
  let fixture: ComponentFixture<UiKitchenPickupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiKitchenPickupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiKitchenPickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
