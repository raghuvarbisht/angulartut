import { Component, effect, signal, WritableSignal ,Signal, computed} from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  count = signal(0);
  data: WritableSignal<number> = signal(0);
  counter: Signal<number> = computed(() => 30); // readonly cannot change its value
  x= 20;

  // varaible for computed signal
   a = signal(10);
   b = signal(20);
   c = computed(()=>this.a() + this.b());

  constructor() {
    effect(() =>{
      console.log('value of x:' + this.x); // this will not call when value of x change
      console.log('value of count:' + this.count());
    })
  }
  updateValue() {
    this.x = this.x + 1;    
  }
  // signal update 
  updateCount() {
    this.count.set(this.count() + 1);    
  }

  // writable signal update
  updateSignal(){
    this.data.update((val)=>val+1)
  }
  // computed signal value update

  showSignalValue() {
    console.log(this.c());
    this.a.set(100);
    console.log(this.c());
  }


}
