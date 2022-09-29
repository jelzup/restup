import { Injectable } from '@angular/core';
import { Cart } from '../../models/cart.model';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProductList: Cart[] = [];

  constructor() {
    const tmpCart = JSON.parse(localStorage.getItem('tmpCart') as string);
    if (!tmpCart) {
      localStorage.setItem('tmpCart', JSON.stringify([]));
    }
    this.cartProductList = JSON.parse(localStorage.getItem('tmpCart') as string);
  }

  /**
   * Récupère le total de produit dans le panier
   * @returns
   */
  getTotalCurrentCart() {
    return this.cartProductList.length;
  }

  /**
   * Ajoute le produit dans le panier
   * @param product
   */
  addProductToCart(product: Cart) {
    if (this.cartProductList) {
      const productExistInCart = this.productInCart(product);
      if (!productExistInCart) {
        this.cartProductList.push(product);
        this.saveCart(this.cartProductList);
      } else {
        this.cartProductList.map(product => this.productInCart(product));
        this.saveCart(this.cartProductList);
      }
    }
  }

  /**
   * Vérifie si un produit existe dans le panier
   * @param product
   * @returns 
   */
  productInCart(product: Product): boolean {
    return this.cartProductList.findIndex(o => o.id === product.id) > -1;
  }

  /**
   * Sauvegarde le panier dans le local storage
   * @param productsList
   */
  saveCart(productsList: Cart[]): void {
    localStorage.setItem('tmpCart', JSON.stringify(productsList));
  }

  /**
   * Supprime un produit du panier
   * @param product
   */
  removeProduct(product: Cart) {
    this.cartProductList = this.cartProductList.filter(({ name }) => name !== product.name);
  }

  /**
   * Supprime le panier
   */
  removeCart() {
    localStorage.setItem('tmpCart', JSON.stringify([]));
    this.cartProductList = JSON.parse(localStorage.getItem('tmpCart') as string);
  }

}
