import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPlanningComponent } from './ui-planning.component';

describe('UiPlanningComponent', () => {
  let component: UiPlanningComponent;
  let fixture: ComponentFixture<UiPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
