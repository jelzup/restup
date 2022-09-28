import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { 
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.restInApi}/products`, product);
  }

  getStarters(): Observable<Product[]> {
    return this.http.get(`assets/mocks/starters.json`) as Observable<Product[]>;
  }

  getDishes(): Observable<Product[]> {
    return this.http.get(`assets/mocks/dishes.json`) as Observable<Product[]>;
  }

  getDesserts(): Observable<Product[]> {
    return this.http.get(`assets/mocks/desserts.json`) as Observable<Product[]>;
  }

  getMenus(): Observable<Product[]> {
    return this.http.get(`assets/mocks/menus.json`) as Observable<Product[]>;
  }

  getDrinks(): Observable<Product[]> {
    return this.http.get(`assets/mocks/drinks.json`) as Observable<Product[]>;
  }

  editProduct(product: Product) {
    return this.http.put(`${environment.restInApi}/products/${product.id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${environment.restInApi}/products/${id}`);
  }

}
