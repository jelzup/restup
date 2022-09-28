import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitchenRoomComponent } from './ui-kitchen-room.component';

describe('UiKitchenRoomComponent', () => {
  let component: UiKitchenRoomComponent;
  let fixture: ComponentFixture<UiKitchenRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiKitchenRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiKitchenRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
