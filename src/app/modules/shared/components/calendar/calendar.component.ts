import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import frLocale from '@fullcalendar/core/locales/fr';
import { Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PlanningService } from 'src/app/services/planning/planning.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  subscription: Subscription = new Subscription();
  calendarOptions: CalendarOptions = {
    locale: frLocale,
    timeZone: 'France/Paris',
    initialView: 'dayGridMonth',
    selectable: true,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    contentHeight: 'auto',
    editable: true,
    customButtons: {
      addEvent: {
        text: 'Ajouter',
        click: this.addToPlanning.bind(this)
      }
    },
    headerToolbar: {
      left: 'title',
      center: '',
      right: 'addEvent today prev,next'
    },
  };


  constructor(private planningService: PlanningService) { }

  ngOnInit(): void {
    this.getPlanning();
  }


  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }

  getPlanning() {
    this.subscription = this.planningService.getPlanning().pipe(
      catchError(error => {
        return throwError(error);
      })
    ).subscribe(datas => {
      this.calendarOptions.events = datas;
    })
  }

  addToPlanning() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: "Ajout d'un événement",
        text: "Veuillez saisir le formulaire ci-dessous",
        html: `<select class="form-control mb-2 mt-4" id="exampleFormControlSelect1">
                <option>John SNOW</option>
                <option>Brad PITT</option>
                <option>John DOE</option>
                <option>Jason DERULO</option>
                <option>Craig DAVID</option>
              </select>
        <input class="form-control mb-2" type="datetime-local" value="2018-11-23T10:30:00" id="example-datetime-local-input" placeholder="Date de début">
        <input class="form-control mb-3" type="datetime-local" value="2018-11-23T10:30:00" id="example-datetime-local-input" placeholder="Date de fin">`,
        showCancelButton: true,
        confirmButtonText: "Valider",
        cancelButtonText: "Annuler",
        reverseButtons: false
      })
      .then(result => {
        if (result.value) {
          swalWithBootstrapButtons.fire(
            "Demande validée !",
            "L'évènement a bien été enregistré.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Demande annulée",
            "Aucun évènement n'a été ajouté.",
            "error"
          );
        }
      });
  }
}
