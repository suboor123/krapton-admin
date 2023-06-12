import { Component, Input, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Alert } from 'src/app/lib/alert';
import { FirebaseDataSerializer } from 'src/app/lib/firebase-serializer';
import { Spinner } from 'src/app/lib/spinner';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Announcement } from 'src/app/types/announcement';
import { User, UserReference } from 'src/app/types/user';
import { StrUtils } from 'src/app/utils/str';

@Component({
    selector: 'app-announcement-form',
    templateUrl: './announcement-form.component.html',
    styleUrls: ['./announcement-form.component.css'],
})
export class AnnouncementFormComponent implements OnInit {
    @Input() closeAnnouncementModal: () => void = () => {};
    public users: User[] = [];
    public formErrors: string[] = [];
    public tagDropdown: { item_id: string; item_text: string }[] = [];
    dropdownSettings: IDropdownSettings = {};
    public tag: UserReference[] = [];
    public announcementForm = {
        title: '',
        content: '',
        tagTo: this.tag,
    };

    constructor(
        private profile: ProfileService,
        private announcement: AnnouncementService
    ) {}

    ngOnInit(): void {
        this.fetchUsers();
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            allowSearchFilter: true,
            closeDropDownOnSelection: true,
        };
    }

    fetchUsers() {
        Spinner.show();
        this.profile.syncAll().subscribe((snapshot) => {
            if (snapshot && snapshot.exists()) {
                const payload = snapshot.val();
                this.users = new FirebaseDataSerializer<User>(
                    payload
                ).serialize();
                this.populateDropdownOptions();
                Spinner.hide();
            }
        });
    }

    private populateDropdownOptions(): void {
        this.tagDropdown = this.users.map((user) => {
            return {
                item_id: user.id!,
                item_text: `${user.firstName} ${user.lastName}`,
            };
        });
    }

    public handleSelectTag(tagId: any) {
        let tag = {
            userId: tagId.item_id,
            userName: tagId.item_text,
            ...(tagId.imageUrl ? { imageUrl: tagId.imageUrl } : {}),
        };
        this.announcementForm.tagTo.push(tag);
    }

    public handleSelectAllTag(tagId: any[]) {
        const tags = tagId.map((tag) => {
            return {
                userId: tag.item_id,
                userName: tag.item_text,
            };
        });

        this.announcementForm.tagTo = tags;
    }

    public handleContentChange(content: string) {
        this.announcementForm.content = content;
    }

    private validateForm() {
        let isValidated = true,
            errors: string[] = [];
        Object.keys(this.announcementForm).forEach((key) => {
            if (
                typeof (this.announcementForm as any)[key] === 'string' &&
                (this.announcementForm as any)[key] === ''
            ) {
                isValidated = false;
                if (!errors.length)
                    errors.push(
                        `${StrUtils.capitalizeFirstLetter(
                            key
                        )} is a required field.`
                    );
            }
        });

        this.formErrors = errors;
        return isValidated;
    }

    private get serializedData(): Partial<Announcement> {
        return {
            title: this.announcementForm.title,
            content: this.announcementForm.content,
            ...(this.announcementForm.tagTo
                ? { tagTo: this.announcementForm.tagTo }
                : {}),
        };
    }

    public handleSubmit() {
        if (this.validateForm()) {
            Spinner.show();
            this.announcement.create(
                this.serializedData as Announcement,
                () => {
                    Spinner.hide();
                    Alert.success('Task created successfully!');
                    this.closeAnnouncementModal();
                    this.announcement.refreshAllAnnouncement();
                }
            );
        }
    }
}
