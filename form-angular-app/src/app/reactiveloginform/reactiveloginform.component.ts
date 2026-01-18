import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactiveloginform',
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveloginform.component.html',
  styleUrl: './reactiveloginform.component.scss'
})
export class ReactiveloginformComponent {

  name = new FormControl();
  password = new FormControl(); 
  handleSubmit() {
    console.log('name==',this.name.value);
    console.log('password',this.password.value);
  }

}
