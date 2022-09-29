import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMenuOnlineComponent } from './ui-menu-online.component';

describe('UiMenuOnlineComponent', () => {
  let component: UiMenuOnlineComponent;
  let fixture: ComponentFixture<UiMenuOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiMenuOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMenuOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
