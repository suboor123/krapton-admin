import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { Announcement } from '../types/announcement';
import { Callback } from '../types/callback';
import { FirebaseDataSerializer } from '../lib/firebase-serializer';
import { Task } from '../types/task';
import { User } from '../types/user';
import { DataSnapshot, DatabaseSnapshot } from '@angular/fire/database/interfaces';
import { ProfileService } from './profile.service';

@Injectable({
    providedIn: 'root',
})
export class AnnouncementService {
    private path: string = 'announcements';
    constructor(private profile: ProfileService, private fb: AngularFireDatabase) {}
    public announcementsSubject: BehaviorSubject<Announcement[]> = new BehaviorSubject([] as Announcement[]);
    public announcementObservable$ = this.announcementsSubject.asObservable();

    public async create(announcement: Announcement, callback: Callback): Promise<any> {
        const userId = JSON.parse(localStorage.getItem('user')!).uid;
        return this.fb.database.ref(`${this.path}`).push(
            {
                ...announcement,
                createdBy: {
                    userId: userId,
                },
                createdAt: new Date().toString(),
            } as Partial<Announcement>,
            callback
        );
    }

    private attachUsers(announcements: Announcement[] = []) {
        this.profile.syncAll().subscribe((snapshot: any) => {
            if (snapshot && snapshot.exists()) {
                const users = snapshot.val();

                announcements.forEach((announcement) => {
                    const taggedUser: User[] = [];
                    announcement.tagTo.forEach((tagUser) => {
                        taggedUser.push({
                            ...users[tagUser.userId],
                            id: tagUser.userId,
                        });
                    });
                    const creator = {
                        ...users[announcement.createdBy.userId],
                        id: announcement.createdBy.userId,
                    };
                    announcement.taggedUsers = taggedUser;
                    announcement.createdByUser = creator;
                    console.log(creator);
                });
            }
        });
        return announcements;
    }

    public refreshAllAnnouncement(callback?: Callback) {
        from(this.fb.database.ref(`${this.path}`).get()).subscribe((snapshot) => {
            if (snapshot && snapshot.exists()) {
                const announcements = new FirebaseDataSerializer<Announcement>(snapshot.val()).serialize();
                this.announcementsSubject.next(this.attachUsers(announcements));
                if (callback) callback();
            }
        });
    }
}
