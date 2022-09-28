import { TestBed } from '@angular/core/testing';

import { OrdersPendingService } from './orders-pending.service';

describe('OrdersPendingService', () => {
  let service: OrdersPendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersPendingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
