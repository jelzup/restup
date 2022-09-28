import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiServerPickupComponent } from './ui-server-pickup.component';

describe('UiServerPickupComponent', () => {
  let component: UiServerPickupComponent;
  let fixture: ComponentFixture<UiServerPickupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiServerPickupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiServerPickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
