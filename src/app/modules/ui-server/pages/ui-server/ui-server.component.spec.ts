import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiServerComponent } from './ui-server.component';

describe('UiServerComponent', () => {
  let component: UiServerComponent;
  let fixture: ComponentFixture<UiServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
