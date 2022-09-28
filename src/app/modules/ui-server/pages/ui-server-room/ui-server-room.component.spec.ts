import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiServerRoomComponent } from './ui-server-room.component';

describe('UiServerRoomComponent', () => {
  let component: UiServerRoomComponent;
  let fixture: ComponentFixture<UiServerRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiServerRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiServerRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
