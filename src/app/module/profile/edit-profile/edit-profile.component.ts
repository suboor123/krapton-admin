import { Component, OnInit } from '@angular/core';
import { INDIAN_CITIES, INDIAN_STATES } from 'src/app/constants/cities';
import { Skills } from 'src/app/constants/skills';
import { AuthService } from 'src/app/services/auth.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

type Tabs = 'BasicInfo' | 'TechnicalInfo' | 'Documents' | 'Finish';

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
    public indianStates: string[] = INDIAN_STATES;
    public activeTab: Tabs = 'BasicInfo';
    public dropdownList: any = [];
    public selectedItems: any = [];
    public dropdownSettings: IDropdownSettings = {};
    public allTabs: Tabs[] = [
        'BasicInfo',
        'TechnicalInfo',
        'Documents',
        'Finish',
    ];

    public formValues = {
        basicInfo: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            gender: '',
            state: '',
        },
        skillInfo: {
            experiance: '',
            skills: '',
            aboutMe: '',
        },
    };
    public finalValue = {};
    public SkillsValue: string[] = Skills;

    constructor(public auth: AuthService) {}

    ngOnInit(): void {
        this.dropdownList = this.SkillsValue;
        this.skilldropdown();
    }

    public handleSelectState(state: any) {
        this.formValues.basicInfo.state = state;
    }

    public openNextTab(activeTab: string) {
        if (
            activeTab === 'BasicInfo' &&
            this.formValues.basicInfo.firstName !== '' &&
            this.formValues.basicInfo.lastName !== '' &&
            this.formValues.basicInfo.phoneNumber !== '' &&
            this.formValues.basicInfo.gender !== '' &&
            this.formValues.basicInfo.state !== ''
        ) {
            this.nextTab();
        }
        if (
            activeTab === 'TechnicalInfo' &&
            this.formValues.skillInfo.aboutMe !== '' &&
            this.formValues.skillInfo.experiance !== '' &&
            this.formValues.skillInfo.skills !== ''
        ) {
            this.nextTab();
        }

        if (activeTab === 'Documents') {
            this.nextTab();
        }
    }

    nextTab(): void {
        const indexOfCurrentTab = this.allTabs.indexOf(this.activeTab);
        if (indexOfCurrentTab !== this.allTabs.length - 1) {
            this.activeTab = this.allTabs[indexOfCurrentTab + 1];
        } else {
            this.activeTab = this.allTabs[0];
        }
    }

    public openPreviousTab() {
        const indexOfCurrentTab = this.allTabs.indexOf(this.activeTab);
        if (indexOfCurrentTab !== 0) {
            this.activeTab = this.allTabs[indexOfCurrentTab - 1];
        } else {
            this.activeTab = this.allTabs[this.allTabs.length - 1];
        }
    }

    onSkillsSelect() {
        this.formValues.skillInfo.skills = this.selectedItems;
    }
    onAllSkillSelect() {
        this.formValues.skillInfo.skills = this.selectedItems;
    }

    skilldropdown() {
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 5,
            allowSearchFilter: true,
        };
    }
}
