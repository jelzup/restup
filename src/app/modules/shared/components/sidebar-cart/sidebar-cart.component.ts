import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar-cart',
  templateUrl: './sidebar-cart.component.html',
  styleUrls: ['./sidebar-cart.component.scss']
})
export class SidebarCartComponent implements OnInit {
  @Input() showCart: boolean = true;
  showSidebar = false;
  carts: Cart[] = [];
  quantity: number = 1;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCarts();
  }

  openSidebar() {
    return this.showSidebar = !this.showSidebar;
  }

  getCarts() {
    this.carts = this.cartService.cartProductList;
  }

  getTotalTTC() {
    return this.carts.reduce((acc, product) => acc = acc + (product.price * product.quantity), 0);
  }

  increment(cart: any) {
    cart.quantity++;
    if (cart.quantity === 8) {
      return;
    }
    this.carts = this.cartService.cartProductList;
    this.cartService.saveCart(this.carts);
  }

  decrement(cart: any) {
    cart.quantity--;
    if (cart.quantity === 0) {
      this.cartService.removeProduct(cart);
    }
    this.carts = this.cartService.cartProductList;
    this.cartService.saveCart(this.carts);
  }

  clearCart(event: Event) {
    event.stopPropagation();
    this.cartService.removeCart();
    this.carts = this.cartService.cartProductList;
  }

  sendOrder() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: "Envoyer la commande",
        text: "Confirmez-vous l'envoi de la commande ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "Annuler",
        reverseButtons: true
      })
      .then(result => {
        if (result.value) {
          swalWithBootstrapButtons.fire(
            "Commande envoyée !",
            "Votre commande vient d'être envoyé en cuisine. Merci de patientez pendant que nous préparons votre commande.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Commande annulée",
            "Votre commande est annulée.",
            "error"
          );
        }
      });
  }

}
