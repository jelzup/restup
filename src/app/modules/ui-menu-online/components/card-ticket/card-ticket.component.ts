import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { CartService } from 'src/app/services/cart/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-ticket',
  templateUrl: './card-ticket.component.html',
  styleUrls: ['./card-ticket.component.scss']
})
export class CardTicketComponent implements OnInit {
  @Input() product: any;
  @Input() innerWidth: number = 0;
  quantity: number = 1;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  isDesktop(): boolean {
    return this.innerWidth > 1180;
  }

  isLargeTablet(): boolean {
    return this.innerWidth <= 1180;
  }

  isTablet(): boolean {
    return this.innerWidth <= 830;
  }

  isMobile(): boolean {
    return this.innerWidth <= 500;
  }

  getCategoryProductClass(category: any) {
    if (category === 'entrees') {
      return 'bg-gradient-success';
    } else if (category === 'plats') {
      return 'bg-gradient-danger';
    } else if (category === 'desserts') {
      return 'bg-gradient-info';
    } else {
      return 'bg-gradient-secondary';
    }
  }

  orderInProgress() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: "Prise en charge de la commande",
        text: "Confirmez-vous la prise en charge de la commande ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirmer",
        cancelButtonText: "Annuler",
        reverseButtons: false
      })
      .then(result => {
        if (result.value) {
          swalWithBootstrapButtons.fire(
            "Commande servie !",
            "La commande a été servie.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Prise en charge annulé",
            "La commande reste toujours en attente d'être servie par le client.",
            "error"
          );
        }
      });
  }

  orderReady() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: "Prise en charge de la commande",
        text: "Confirmez-vous la prise en charge de la commande ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirmer",
        cancelButtonText: "Annuler",
        reverseButtons: false
      })
      .then(result => {
        if (result.value) {
          swalWithBootstrapButtons.fire(
            "Commande servie !",
            "La commande a été servie.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Prise en charge annulé",
            "La commande reste toujours en attente d'être servie par le client.",
            "error"
          );
        }
      });
  }

  getQuantity(event: number) {
    this.quantity = event;
  }

  addProductToCart(product: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: "Ajouter au panier",
        text: "Confirmez-vous l'ajout au panier ?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Confirmer",
        cancelButtonText: "Annuler",
        reverseButtons: false
      })
      .then(result => {
        if (result.value) {
          product.quantity = this.quantity;
          this.cartService.addProductToCart(product);
          this.quantity = 1;
          swalWithBootstrapButtons.fire(
            "Ajouté au panier !",
            "Le produit a bien été ajouté au panier.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Ajout annulé",
            "L'article n'a pas été ajouté au panier.",
            "error"
          );
        }
      });
  }

  addToCart(event: any) {

  }

  handleDenial() {

  }

  handleDismiss(event: any) {

  }

}
