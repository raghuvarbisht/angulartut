import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  imports: [],
  templateUrl: './loop.component.html',
  styleUrl: './loop.component.css'
})
export class LoopComponent {

   users = ['Amit' , 'Raghuvar', 'Sumit', 'Rajan'];
   students= [
    {name: 'Amit' , age:20 , city: 'Delhi'},
    {name: 'Sumit' , age:25 , city: 'Noida'},
    {name: 'Rajat' , age:27 , city: 'Moradabad'},
    {name: 'Singh' , age:30 , city: 'Kanpur'}
   ]
}
