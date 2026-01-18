import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username: string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.queryParams.subscribe(params=> {
      this.username = params['name'];
    })
  }

}
