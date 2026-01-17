import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-effect',
  imports: [],
  templateUrl: './effect.component.html',
  styleUrl: './effect.component.css'
})
export class EffectComponent {
 userName = signal('Anil');

  constructor() {
    effect(()=> {
      console.log(this.userName());
    })
  }
}
