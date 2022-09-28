import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersPendingService {

  constructor(private http: HttpClient) {
  }

  getOrdersPending(): Observable<any[]> {
    return this.http.get(`assets/mocks/orders-pending.json`) as Observable<any[]>;
  }

}
