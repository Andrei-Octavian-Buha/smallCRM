import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { UserServiceService } from '../services/user-service.service';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { User } from '../models/user.class';
import { Timestamp , FieldValue } from '@angular/fire/firestore';

@Component({
  selector: 'app-user',
  imports: [CommonModule, MatCardModule, RouterModule, MatTableModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'email','street','birthDate','city','zipCode'];
  dataSource: User[] = [];



    constructor(private userService: UserServiceService) {
    
    }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.dataSource = users.sort((a, b) => {
        const timeA = this.getTimestamp(a.createdAt);
        const timeB = this.getTimestamp(b.createdAt);
        return timeB - timeA; 
      });
    });
  }

  private getTimestamp(timestamp: Timestamp | FieldValue | null | undefined): number {
    if (!timestamp || !(timestamp instanceof Timestamp)) {
      return 0;
    }
    return timestamp.toMillis();
  }
}
}
