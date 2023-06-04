import { Component, OnInit } from '@angular/core';
import { INDIAN_CITIES, INDIAN_STATES } from 'src/app/constants/cities';
import { AuthService } from 'src/app/services/auth.service';

type Tabs = 'BasicInfo' | 'TechnicalInfo' | 'Documents' | 'Finish';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public indianStates: string[] = INDIAN_STATES;
  public activeTab: Tabs = 'BasicInfo';
  public allTabs: Tabs[] = ['BasicInfo', 'TechnicalInfo', 'Documents', 'Finish'];


  public formValues = {
    basicInfo: {
      firstName: '',
      lastName: '',
      phoneNumber: 0,
      gender: 'male',
      state: ''
    }
  }

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  public handleSelectState(state: any) {
    this.formValues.basicInfo.state = state
  }

  public openNextTab() {
    const indexOfCurrentTab = this.allTabs.indexOf(this.activeTab);
    if(indexOfCurrentTab !== this.allTabs.length - 1) {
      this.activeTab = this.allTabs[indexOfCurrentTab + 1];
    } else {
      this.activeTab = this.allTabs[0];
    }
  }

  public openPreviousTab() {
    const indexOfCurrentTab = this.allTabs.indexOf(this.activeTab);
    if(indexOfCurrentTab !== 0) {
      this.activeTab = this.allTabs[indexOfCurrentTab - 1];
    } else {
      this.activeTab = this.allTabs[this.allTabs.length - 1];
    }
  }

}
