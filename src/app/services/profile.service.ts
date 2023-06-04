import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { from } from 'rxjs';
import { User } from '../types/user';

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    private path = 'user';

    constructor(private fb: AngularFireDatabase) {}

    async createUser(user: User) {
        const userId = JSON.parse(localStorage.getItem('user')!).uid;
        return from(this.fb.database.ref(`${this.path}/${userId}`).set(user));
    }

    syncById(uid: string) {
        return from(this.fb.database.ref(`${this.path}/${uid}`).get());
    }
}
