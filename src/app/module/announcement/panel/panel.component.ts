import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UnsubscribeOnDestroy } from 'src/app/decorators/unsubscribe';
import { Confirmable } from 'src/app/decorators/confirm';
import { Alert } from 'src/app/lib/alert';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { Announcement } from 'src/app/types/announcement';
@UnsubscribeOnDestroy()
@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
    public showAnnouncementModal: boolean = false;
    constructor(private announcement: AnnouncementService) {}
    private announcementSubscription: Subscription | undefined;
    public announcements: Announcement[] = [];
    ngOnInit(): void {
        this.announcement.refreshAllAnnouncement();
        this.announcementSubscription = this.announcement.announcementObservable$.subscribe((announcements) => {
            if (announcements) {
                this.announcements = announcements;
            }
        });
    }

    public openAnnouncementModal() {
        this.showAnnouncementModal = true;
    }

    public closeAnnouncementModal() {
        this.showAnnouncementModal = false;
    }
    @Confirmable('Are you sure?', 'You want to delete this announcement')
    public deleteAnnouncement(id: string | undefined) {
        this.announcement.delete(id as string, () => {
            Alert.success('Announcement deleted');
            this.announcement.refreshAllAnnouncement();
        });
    }
}
