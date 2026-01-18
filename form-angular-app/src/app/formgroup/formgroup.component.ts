import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formgroup',
  imports: [ReactiveFormsModule],
  templateUrl: './formgroup.component.html',
  styleUrl: './formgroup.component.scss'
})
export class FormgroupComponent {

  userForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
    email: new FormControl()
  })

   onSubmit() {
    console.log('submit form value', this.userForm.value);
   }


}
