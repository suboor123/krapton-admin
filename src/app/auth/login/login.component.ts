import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AuthCredentials } from 'src/app/types/auth';
import { debounce } from 'src/app/utils/debounce';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public disbaledSbtmBtn = true;

  public authCredentials: AuthCredentials = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  public handleChange() {
    debounce(() => {
      let isValidated = true;
      Object.values(this.authCredentials).forEach((val) => {
        if (!val.trim()) {
          isValidated = false;
        }
      });

      this.disbaledSbtmBtn = !isValidated;
    });
  }

  public handleSubmit() {
    this.auth.login(this.authCredentials);
  }

}
