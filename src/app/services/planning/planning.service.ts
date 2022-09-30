import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  constructor(private http: HttpClient) { }

  getPlanning() {
    return this.http.get(`assets/mocks/planning.json`) as Observable<any[]>;
  }
}
