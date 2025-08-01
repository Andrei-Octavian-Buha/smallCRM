import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  userDetails: User = new User();

  constructor(private userService: UserServiceService, private route: ActivatedRoute){
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.userService.getUserById(id).subscribe(user => {
          this.userDetails = new User(user);
        });
      }
    });
  }
}
