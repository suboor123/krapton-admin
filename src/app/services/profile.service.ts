import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { from, Observable } from 'rxjs';
import { Department } from '../types/department';
import { Position } from '../types/position';
import { User } from '../types/user';

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    private path: string = 'user';

    constructor(private fb: AngularFireDatabase) {}

    async createUser(user: User): Promise<User> {
        const userId = JSON.parse(localStorage.getItem('user')!).uid;
        return this.fb.database.ref(`${this.path}/${userId}`).set({
            ...user,
            position: Position.Unassigned,
            department: Department.Unassigned,
        });
    }

    syncById(uid: string): Observable<SnapshotAction<User>> {
        return this.fb.object<User>(`${this.path}/${uid}`).snapshotChanges();
    }

    syncAll(): Observable<SnapshotAction<User>[]> {
        return this.fb.list<User>(this.path).snapshotChanges();
    }
}
