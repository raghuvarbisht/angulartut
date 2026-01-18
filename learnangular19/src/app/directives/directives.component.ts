import { Component } from '@angular/core';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgFor, NgIf, NgSwitch,NgSwitchCase, NgSwitchDefault],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  visible = true;
  color ='blue';
  users = ['Amit', 'Raghuvar', 'Sanjeev'];

  students= [
    {name:'Amit', age:20},
    {name:'Sumit', age:25},
    {name:'Rajat', age:35}
  ]
  toggle() {
    this.visible = !this.visible;
    console.log('visible==',this.visible);
  }
  updateColor(color: string){
    this.color = color;
  }
}
