import { Component } from '@angular/core';

@Component({
  selector: 'app-controlflowifelse',
  imports: [],
  templateUrl: './controlflowifelse.component.html',
  styleUrl: './controlflowifelse.component.css'
})
export class ControlflowifelseComponent {
  display: boolean = false;
  color:number = 1;
  switchColor: number = 1;

  show() {
    this.display = true;
  }
  hide() {
    this.display = false;
  }
  handleColor(val: number){
    this.color = val;
  }

  handleInput(event: Event) {
    const number = parseInt((event.target as HTMLInputElement)?.value) || 1;
    this.color = number;
    
    this.switchColor = this.color;
  }

}
