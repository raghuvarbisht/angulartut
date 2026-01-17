import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { CounterComponent } from './counter/counter.component';
import { UserformComponent } from './userform/userform.component';
import { UsermouseeventComponent } from './usermouseevent/usermouseevent.component';
import { ControlflowifelseComponent } from './controlflowifelse/controlflowifelse.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent,SignupComponent,
    ProfileComponent,CounterComponent,
  UserformComponent,
UsermouseeventComponent,
ControlflowifelseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learnangular19';
  x =10;
  y =20;
  
}
