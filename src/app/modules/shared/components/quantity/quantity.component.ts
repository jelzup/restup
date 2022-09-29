import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit {
  @Input() quantity: number = 1;
  @Output() changeQuantityEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    if (changes.quantity) {
      this.quantity = changes.quantity.currentValue;
      console.log('this.quantity', this.quantity);
    }
  }

  increment() {
    if (this.quantity === 20) {
      return;
    }
    this.quantity++;
    this.changeQuantityEvent.emit(this.quantity);
  }

  decrement() {
    if (this.quantity === 1) {
      return;
    }
    this.quantity--;
    this.changeQuantityEvent.emit(this.quantity);
  }
}
