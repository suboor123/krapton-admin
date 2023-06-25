import { Component, Input, OnInit } from '@angular/core';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { Announcement } from 'src/app/types/announcement';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
    @Input() announcement!: Announcement;
    @Input() cardId!: Number;
    @Input() deleteAnnouncement: (id: string | undefined) => void = () => {};
    public userId: string = '';
    constructor(private announcementService: AnnouncementService) {}

    ngOnInit(): void {
        this.userId = JSON.parse(localStorage.getItem('user')!).uid;
    }

    public isUserLiked(likesArray: string[]) {
        return this.announcement.likes && this.announcement.likes.includes(this.userId);
    }

    public onLike(id: string | undefined) {
        let likes = this.announcement.likes ? this.announcement.likes : (this.announcement.likes = []);
        this.announcementService.toogleLikes(id as string, likes);
    }

    public editAnnouncement(id: string | undefined) {}
}
