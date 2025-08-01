import { Timestamp  , FieldValue  } from 'firebase/firestore';

export class User{
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;
    createdAt: Timestamp | FieldValue | null;


    constructor(obj?: any){
        this.userId = obj ? obj.userId: '';
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email: '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.createdAt = obj?.createdAt ?? null; // default to null
    }
}