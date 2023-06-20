import { Component, Input, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Alert } from 'src/app/lib/alert';
import { FirebaseDataSerializer } from 'src/app/lib/firebase-serializer';
import { Spinner } from 'src/app/lib/spinner';
import { ProfileService } from 'src/app/services/profile.service';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/types/task';
import { User } from 'src/app/types/user';
import { StrUtils } from 'src/app/utils/str';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
    @Input() closeTaskModal: () => void = () => {};

    public users: User[] = [];
    public formErrors: string[] = [];
    public assigneeDropdown: { item_id: string; item_text: string }[] = [];
    dropdownSettings: IDropdownSettings = {};

    public taskForm = {
        title: '',
        description: '',
        assignedTo: undefined as any,
    };

    constructor(private profile: ProfileService, private task: TaskService) {}

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
                this.users = new FirebaseDataSerializer<User>(payload).serialize();
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
                imageUrl: user.imageUrl,
            };
        });
    }

    public handleSelectAssignee(assignee: any) {
        this.taskForm.assignedTo = {
            userId: assignee.item_id,
            userName: assignee.item_text,
            ...(assignee.imageUrl ? { imageUrl: assignee.imageUrl } : {}),
        };
    }

    public handleContentChange(content: string) {
        this.taskForm.description = content;
    }

    private validateForm() {
        let isValidated = true,
            errors: string[] = [];
        Object.keys(this.taskForm).forEach((key) => {
            if (typeof (this.taskForm as any)[key] === 'string' && (this.taskForm as any)[key] === '') {
                isValidated = false;
                if (!errors.length) errors.push(`${StrUtils.capitalizeFirstLetter(key)} is a required field.`);
            }
        });

        this.formErrors = errors;
        return isValidated;
    }

    private get serializedData(): Partial<Task> {
        return {
            title: this.taskForm.title,
            description: this.taskForm.description,
            ...(this.taskForm.assignedTo ? { assignedTo: this.taskForm.assignedTo } : {}),
        };
    }

    public handleSubmit() {
        if (this.validateForm()) {
            Spinner.show();
            this.task.create(this.serializedData as Task, () => {
                Spinner.hide();
                Alert.success('Task created successfully!');
                this.closeTaskModal();
                this.task.refreshAllTasks();
            });
        }
    }
}
