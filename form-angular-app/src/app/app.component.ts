import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveloginformComponent } from './reactiveloginform/reactiveloginform.component';
import { FormgroupComponent } from './formgroup/formgroup.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    ReactiveloginformComponent,
    FormgroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'form-angular-app';
}
