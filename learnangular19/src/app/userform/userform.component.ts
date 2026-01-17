import { Component } from '@angular/core';

@Component({
  selector: 'app-userform',
  imports: [],
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.css'
})
export class UserformComponent {
  name:string = '';
  address: string = '';
  handleEvent(event: Event){
    this.name= (event.target as HTMLInputElement).value;
    console.log("name: ",(event.target as HTMLInputElement).value);
  }

  handleAddress(address: string){
    this.address = address;
    console.log("address: ", address);
  }

}
