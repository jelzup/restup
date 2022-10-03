import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavbarKitchenServerComponent } from './bottom-navbar-kitchen-server.component';

describe('BottomNavbarKitchenServerComponent', () => {
  let component: BottomNavbarKitchenServerComponent;
  let fixture: ComponentFixture<BottomNavbarKitchenServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomNavbarKitchenServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavbarKitchenServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
