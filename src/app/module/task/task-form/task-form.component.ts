import { Component, Input, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FirebaseDataSerializer } from 'src/app/lib/firebase-serializer';
import { Spinner } from 'src/app/lib/spinner';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/types/user';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
    @Input() closeTaskModal: () => void = () => {};

    public users: User[] = [];
    public assigneeDropdown: { item_id: string; item_text: string }[] = [];
    dropdownSettings: IDropdownSettings = {};

    public taskForm = {
        title: '',
        description: '',
        assignedTo: '',
    };

    constructor(private profile: ProfileService) {}

    ngOnInit(): void {
        this.fetchUsers();
        this.dropdownSettings = {
            singleSelection: true,
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
        this.assigneeDropdown = this.users.map((user) => {
            return {
                item_id: user.id!,
                item_text: `${user.firstName} ${user.lastName}`,
            };
        });
    }

    public handleSelectAssignee(assigneeId: any) {
        console.log(assigneeId);
    }

    public handleContentChange(content: string) {
        console.log(content);
    }
}
