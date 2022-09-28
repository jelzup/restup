import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-ticket',
  templateUrl: './card-ticket.component.html',
  styleUrls: ['./card-ticket.component.scss']
})
export class CardTicketComponent implements OnInit {
  @Input() order: any;
  @Input() innerWidth: number = 0;
  constructor() { }

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
        title: "Commande prête",
        text: "Confirmez-vous que la commande est prête ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirmer",
        cancelButtonText: "Annuler",
        reverseButtons: false
      })
      .then(result => {
        if (result.value) {
          swalWithBootstrapButtons.fire(
            "Commande envoyée !",
            "La commande est traitée par la cuisine et sera prise en charge par le serveur.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Envoi annulé",
            "La commande reste toujours en attente.",
            "error"
          );
        }
      });
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
            "Commande prise en charge !",
            "La commande a été prise charge par la cuisine.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Prise en charge annulé",
            "La commande reste en attente de prise en charge par la cuisine.",
            "error"
          );
        }
      });
  }

}
