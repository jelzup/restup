import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitchenComponent } from './ui-kitchen.component';

describe('UiKitchenComponent', () => {
  let component: UiKitchenComponent;
  let fixture: ComponentFixture<UiKitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiKitchenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
