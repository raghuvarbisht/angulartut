import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  name: string = 'raghuvar'
  other: string | number= 10;
  anyValue: any = "singh";
 handleSignUp() {
   alert('signupcall')
   this.otherFunction();
   this.userDetails();
 }
 userDetails() {
  console.log(`username : ${this.name}`)
  console.log(`other as string : ${this.other}`)
  console.log(`any as string : ${this.anyValue}`)
  this.anyValue = true
  console.log(`any as boolean : ${this.anyValue}`)
 }
 otherFunction(){
  alert('call another')
 }
 getUserData(name: string, age: number) {
  alert(`name : ${name}  age : ${age}`);
 }
}
