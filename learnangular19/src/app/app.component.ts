import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
//import { SignalComponent } from './signal/signal.component';
import { EffectComponent } from './effect/effect.component';
import { ContextualComponent } from './contextual/contextual.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
// import { SignupComponent } from './signup/signup.component';
// import { ProfileComponent } from './profile/profile.component';
// import { CounterComponent } from './counter/counter.component';
// import { UserformComponent } from './userform/userform.component';
// import { UsermouseeventComponent } from './usermouseevent/usermouseevent.component';
// import { ControlflowifelseComponent } from './controlflowifelse/controlflowifelse.component';
// import { LoopComponent } from './loop/loop.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
LoginComponent,
// SignupComponent,
// ProfileComponent,
// CounterComponent,
// UserformComponent,
// UsermouseeventComponent,
// ControlflowifelseComponent,
// LoopComponent,
//SignalComponent,
EffectComponent,
ContextualComponent,
TwowaybindingComponent

],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learnangular19';
  x =10;
  y =20;
  
}
