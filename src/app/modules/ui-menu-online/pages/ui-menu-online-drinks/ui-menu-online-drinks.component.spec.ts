import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMenuOnlineDrinksComponent } from './ui-menu-online-drinks.component';

describe('UiMenuOnlineDrinksComponent', () => {
  let component: UiMenuOnlineDrinksComponent;
  let fixture: ComponentFixture<UiMenuOnlineDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiMenuOnlineDrinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMenuOnlineDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
