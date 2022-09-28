import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiServerDeliveryComponent } from './ui-server-delivery.component';

describe('UiServerDeliveryComponent', () => {
  let component: UiServerDeliveryComponent;
  let fixture: ComponentFixture<UiServerDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiServerDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiServerDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
