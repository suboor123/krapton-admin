import { Component, OnInit } from '@angular/core';
import { INDIAN_CITIES, INDIAN_STATES } from 'src/app/constants/cities';
import { Skills } from 'src/app/constants/skills';
import { AuthService } from 'src/app/services/auth.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { StrUtils } from 'src/app/utils/str';

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
    public formErrors: string[] = [];
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
            experience: '',
            skills: '',
            aboutMe: '',
        },
    };
    public finalValue = {};
    public SkillsValue: string[] = Skills;

    constructor(public auth: AuthService) {}

    ngOnInit(): void {
        this.dropdownList = this.SkillsValue;
        this.initMultiSelect();
    }

    private initMultiSelect() {
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

    public handleSelectState(state: any) {
        this.formValues.basicInfo.state = state;
    }

    public validateFormVals(formObj: { [key: string]: string | number }) {
        let isValidated = true,
            errors: string[] = [];
        Object.keys(formObj).forEach((key) => {
            if (formObj[key] === '') {
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

    public openNextTab(activeTab: string) {
        if (
            activeTab === 'BasicInfo' &&
            this.validateFormVals(this.formValues.basicInfo)
        ) {
            this.nextTab();
        }
        if (
            activeTab === 'TechnicalInfo' &&
            this.validateFormVals(this.formValues.skillInfo)
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
}
