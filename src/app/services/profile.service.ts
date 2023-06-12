import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { DataSnapshot } from '@angular/fire/database/interfaces';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Department } from '../types/department';
import { Position } from '../types/position';
import { User } from '../types/user';
import { FirebaseDataSerializer } from '../lib/firebase-serializer';
import { Alert } from '../lib/alert';
import { UserRole } from '../types/role';
import { Callback } from '../types/callback';

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    private path: string = 'users';

    public currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(
        null as any
    );
    public currentUserObserver$ = this.currentUserSubject.asObservable();

    public allUsersSubject: BehaviorSubject<User[]> = new BehaviorSubject(
        [] as User[]
    );
    public allUserObserver$ = this.allUsersSubject.asObservable();

    constructor(private fb: AngularFireDatabase) {}

    public async createUser(user: User, callback?: Callback): Promise<User> {
        const u = JSON.parse(localStorage.getItem('user')!);
        return this.fb.database.ref(`${this.path}/${u.uid}`).set(
            {
                ...user,
                imageUrl: u.photoURL || '',
                email: u.email,
                role: UserRole.USER,
                position: Position.Unassigned,
                department: Department.Unassigned,
            },
            callback
        );
    }

    public refreshCurrentUser() {
        this.getCurrentUser().subscribe((snapshot) => {
            if (snapshot && snapshot.exists()) {
                const payload = snapshot.val();
                this.currentUserSubject.next({ id: snapshot.key!, ...payload });
            }
        });
    }

    public getCurrentUser(): Observable<DataSnapshot> {
        const userId = JSON.parse(localStorage.getItem('user')!).uid;
        return this.syncById(userId);
    }

    public syncById(uid: string): Observable<DataSnapshot> {
        return from(this.fb.database.ref(`${this.path}/${uid}`).get());
    }

    public refreshAllUsers() {
        this.syncAll().subscribe(
            (snapshot) => {
                if (snapshot && snapshot.exists()) {
                    const payload = snapshot.val();
                    const users = new FirebaseDataSerializer<User>(
                        payload
                    ).serialize();
                    this.allUsersSubject.next(users);
                }
            },
            (err) => {
                if (err.message) {
                    Alert.error(err.message);
                }
            }
        );
    }

    public syncAll(): Observable<DataSnapshot> {
        return from(this.fb.database.ref(`${this.path}`).get());
    }
}
