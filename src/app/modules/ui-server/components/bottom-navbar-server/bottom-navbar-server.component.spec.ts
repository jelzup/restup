import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavbarServerComponent } from './bottom-navbar-server.component';

describe('BottomNavbarServerComponent', () => {
  let component: BottomNavbarServerComponent;
  let fixture: ComponentFixture<BottomNavbarServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomNavbarServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavbarServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
