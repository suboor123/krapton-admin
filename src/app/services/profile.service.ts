import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Department } from '../types/department';
import { Position } from '../types/position';
import { User } from '../types/user';

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    private path: string = 'user';

    private currentUserSubject: BehaviorSubject<User | undefined> =
        new BehaviorSubject(undefined as any);
    public currentUser$ = this.currentUserSubject.asObservable();

    constructor(private fb: AngularFireDatabase) {}

    public async createUser(user: User): Promise<User> {
        const userId = JSON.parse(localStorage.getItem('user')!).uid;
        return this.fb.database.ref(`${this.path}/${userId}`).set({
            ...user,
            position: Position.Unassigned,
            department: Department.Unassigned,
        });
    }

    public syncCurrentUser(): void {
        const userId = JSON.parse(localStorage.getItem('user')!).uid;
        this.syncById(userId).subscribe((snapshot) => {
            if (snapshot.payload.exists()) {
                this.currentUserSubject.next({
                    id: snapshot.payload.key,
                    ...snapshot.payload.val(),
                });
            }
        });
    }

    public syncById(uid: string): Observable<SnapshotAction<User>> {
        return this.fb.object<User>(`${this.path}/${uid}`).snapshotChanges();
    }

    public syncAll(): Observable<SnapshotAction<User>[]> {
        return this.fb.list<User>(this.path).snapshotChanges();
    }
}
