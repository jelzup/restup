import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMenuOnlineDessertsComponent } from './ui-menu-online-desserts.component';

describe('UiMenuOnlineDessertsComponent', () => {
  let component: UiMenuOnlineDessertsComponent;
  let fixture: ComponentFixture<UiMenuOnlineDessertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiMenuOnlineDessertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMenuOnlineDessertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
