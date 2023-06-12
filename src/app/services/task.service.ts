import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { DataSnapshot } from '@angular/fire/database/interfaces';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { Task, TaskStatus } from '../types/task';
import { Callback } from '../types/callback';
import { ProfileService } from './profile.service';
import { User } from '../types/user';
import { FirebaseDataSerializer } from '../lib/firebase-serializer';

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    private path: string = 'tasks';
    constructor(
        private fb: AngularFireDatabase,
        private profile: ProfileService
    ) {}

    public tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject(
        [] as Task[]
    );
    public taskObservable$ = this.tasksSubject.asObservable();

    public async create(task: Task, callback: Callback): Promise<any> {
        const userId = JSON.parse(localStorage.getItem('user')!).uid;
        this.fb.database.ref(`${this.path}`).push(
            {
                ...task,
                status: TaskStatus.OPENED,
                createdBy: {
                    userId: userId,
                },
            } as Partial<Task>,
            callback
        );
    }

    public syncById(id: string): Observable<DataSnapshot> {
        return from(this.fb.database.ref(`${this.path}/${id}`).get());
    }

    private attachUsers(tasks: Task[]) {
        this.profile.syncAll().subscribe((snapshot) => {
            if (snapshot && snapshot.exists()) {
                const payload = snapshot.val();
                const users = new FirebaseDataSerializer<User>(
                    payload
                ).serialize();
                tasks.forEach((task) => {
                    const assignedUser = users.find(
                        (u) => u.id === task.assignedTo?.userId
                    );
                    const creator = users.find(
                        (u) => u.id === task.createdBy.userId
                    );
                    task.assignedUser = assignedUser;
                    task.createdByUser = creator;
                });
            }
        });
        return tasks;
    }

    public refreshAllTasks(callback?: Callback) {
        from(this.fb.database.ref(`${this.path}`).get()).subscribe(
            (snapshot) => {
                if (snapshot && snapshot.exists()) {
                    const tasks = new FirebaseDataSerializer<Task>(
                        snapshot.val()
                    ).serialize();
                    this.tasksSubject.next(this.attachUsers(tasks));
                    if (callback) callback();
                }
            }
        );
    }
}
