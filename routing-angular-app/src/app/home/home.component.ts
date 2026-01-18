import { Component } from '@angular/core';
import { RouterLink , Router} from '@angular/router';
//RouterMOdule if you im0ort eroutermodule you dont need to include RouterLink 
@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router){}

  goToUserPage() {
    this.router.navigate(['user'], {queryParams:{name: 'Raghuvar Visht'}});
  }

}
