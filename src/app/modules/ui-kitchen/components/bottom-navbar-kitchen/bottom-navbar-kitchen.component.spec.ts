import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavbarKitchenComponent } from './bottom-navbar-kitchen.component';

describe('BottomNavbarKitchenComponent', () => {
  let component: BottomNavbarKitchenComponent;
  let fixture: ComponentFixture<BottomNavbarKitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomNavbarKitchenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavbarKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
