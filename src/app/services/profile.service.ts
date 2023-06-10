import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { DataSnapshot } from '@angular/fire/database/interfaces';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Department } from '../types/department';
import { Position } from '../types/position';
import { User } from '../types/user';

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    private path: string = 'users';

    public currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(
        null as any
    );
    public currentUserObserver$ = this.currentUserSubject.asObservable();

    constructor(private fb: AngularFireDatabase) {}

    public async createUser(user: User): Promise<User> {
        const userId = JSON.parse(localStorage.getItem('user')!).uid;
        return this.fb.database.ref(`${this.path}/${userId}`).set({
            ...user,
            position: Position.Unassigned,
            department: Department.Unassigned,
        });
    }

    public getCurrentUser(): Observable<DataSnapshot> {
        const userId = JSON.parse(localStorage.getItem('user')!).uid;
        return this.syncById(userId);
    }

    public syncById(uid: string): Observable<DataSnapshot> {
        return from(this.fb.database.ref(`${this.path}/${uid}`).get());
    }

    public syncAll(): Observable<DataSnapshot> {
        return from(this.fb.database.ref(`${this.path}`).get());
    }
}
