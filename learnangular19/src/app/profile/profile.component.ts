import { Component } from "@angular/core";

@Component({
    selector: 'app-profile',
    template: `
    <h1>Profile component </h1>
    <p>{{data}}</p>
    
    `,
    styles: `h1{color:green}`
})

export class ProfileComponent {
    data = 'testing data profile'

}