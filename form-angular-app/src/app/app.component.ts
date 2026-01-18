import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveloginformComponent } from './reactiveloginform/reactiveloginform.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveloginformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'form-angular-app';
}
