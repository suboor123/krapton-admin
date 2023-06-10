import { Component, OnInit } from '@angular/core';
import { DataSnapshot } from '@angular/fire/database/interfaces';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UnsubscribeOnDestroy } from 'src/app/decorators/unsubscribe';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/types/user';

@UnsubscribeOnDestroy()
@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
    public user: User | undefined;
    public userSubscription: Subscription | undefined;

    constructor(
        private actRoute: ActivatedRoute,
        public profile: ProfileService
    ) {}

    ngOnInit(): void {
        this.userSubscription = this.profile.currentUserObserver$.subscribe(
            (user) => {
                this.user = user;
            }
        );

        this.actRoute.data.subscribe((data) => {
            const snapshot = data.profileResolver as DataSnapshot;
            if (snapshot && snapshot.exists()) {
                this.user = {
                    id: snapshot.key,
                    ...snapshot.val(),
                };
                this.profile.currentUserSubject.next(this.user as User);
            }
        });
    }
}
