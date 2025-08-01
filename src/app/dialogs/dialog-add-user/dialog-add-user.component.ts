import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogTitle,
  MatDialogRef
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { User } from '../../models/user.class';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { addDoc, DocumentData } from '@angular/fire/firestore';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DocumentReference, serverTimestamp } from "firebase/firestore";

@Component({
  selector: 'app-dialog-add-user',
    imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogActions,
    MatDatepickerModule,
    MatProgressBarModule,
    CommonModule
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
  providers: [provideNativeDateAdapter()]
})

export class DialogAddUserComponent {

  user: User = new User();
  birthDate?: Date;
  userCollection;
  item$;
  loading = false;

  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogAddUserComponent>){
    this.userCollection = collection(this.firestore, 'users');
    this.item$ = collectionData(this.userCollection);
  }
  onNoClick(): void {
  }
saveUser() {
    if (this.birthDate) {
      this.user.birthDate = this.birthDate.getTime();
    } 
    this.loading = true;
    this.user.createdAt = serverTimestamp();
    addDoc(this.userCollection, { ...this.user } as DocumentData)
    .then((docRef) => {
      this.loading = false;
      console.log(this.loading);
      console.log('User adăugat cu ID:', docRef.id);
      this.dialogRef.close();
    }).catch((docRef) => {
      console.error('Eroare la salvarea utilizatorului:', docRef.id);
    });
}
}
