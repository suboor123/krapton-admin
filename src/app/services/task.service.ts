import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { DataSnapshot } from '@angular/fire/database/interfaces';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { Task, TaskStatus } from '../types/task';

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    private path: string = 'tasks';
    constructor(private fb: AngularFireDatabase) {}

    public tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject(
        [] as Task[]
    );
    public taskObservable$ = this.tasksSubject.asObservable();

    public async create(task: Task): Promise<any> {
        return this.fb.database
            .ref(`${this.path}`)
            .push({ ...task, status: TaskStatus.OPENED });
    }

    public syncById(id: string): Observable<DataSnapshot> {
        return from(this.fb.database.ref(`${this.path}/${id}`).get());
    }

    public syncAll(): Observable<DataSnapshot> {
        return from(this.fb.database.ref(`${this.path}`).get());
    }
}
