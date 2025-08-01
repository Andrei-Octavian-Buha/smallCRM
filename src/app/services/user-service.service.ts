import { inject, Injectable } from '@angular/core';
import { Firestore, collectionData, collection, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private firestore;

  constructor(){
  this.firestore = inject(Firestore);
  }
  getUsers(): Observable<User[]> {
    const userCollection = collection(this.firestore, 'users');
    return collectionData(userCollection, { idField: 'id' }) as Observable<User[]>;
  }

  getUserById(id: string): Observable<User> {
    const ref = doc(this.firestore, `users/${id}`);
    return docData(ref , { idField: 'userId' }) as Observable<User>;
  }
}
