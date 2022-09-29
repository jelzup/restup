import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMenuOnlineFormulesComponent } from './ui-menu-online-formules.component';

describe('UiMenuOnlineFormulesComponent', () => {
  let component: UiMenuOnlineFormulesComponent;
  let fixture: ComponentFixture<UiMenuOnlineFormulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiMenuOnlineFormulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMenuOnlineFormulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
