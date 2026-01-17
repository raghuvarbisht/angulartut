import { Component } from '@angular/core';

@Component({
  selector: 'app-usermouseevent',
  imports: [],
  templateUrl: './usermouseevent.component.html',
  styleUrl: './usermouseevent.component.css'
})
export class UsermouseeventComponent {

  handleMouseHover(event: MouseEvent) :void {
    console.log('mouse over', event);
  }
  handleMouseLeave(event: MouseEvent): void {
    console.log('mouse leave', event);
  }
  handleMouseEnter(event: MouseEvent): void {
    console.log('mouse enter', event);
  }
}
