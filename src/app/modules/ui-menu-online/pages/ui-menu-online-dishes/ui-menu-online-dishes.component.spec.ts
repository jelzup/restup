import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMenuOnlineDishesComponent } from './ui-menu-online-dishes.component';

describe('UiMenuOnlineDishesComponent', () => {
  let component: UiMenuOnlineDishesComponent;
  let fixture: ComponentFixture<UiMenuOnlineDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiMenuOnlineDishesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMenuOnlineDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
