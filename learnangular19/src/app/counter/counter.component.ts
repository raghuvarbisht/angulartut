import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter:number = 0;

  handleCounter(actionType:string = 'reset') {
    if (actionType === 'plus') {
      this.counter = this.counter + 1
    } else if (actionType === 'minus') {
      this.counter = this.counter > 0 ? this.counter - 1 : 0
    } else {
      this.counter = 0;
    }

  }
}
