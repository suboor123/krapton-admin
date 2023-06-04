import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { debounce } from 'src/app/utils/debounce';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public disbaledSbtmBtn = true;

  public authCredentials = {
    email: '',
    password: '',
    confirmPassword: '',
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

      if (isValidated) {
        isValidated =
          this.authCredentials.password ===
          this.authCredentials.confirmPassword;
      }

      this.disbaledSbtmBtn = !isValidated;
    });
  }

  public handleSubmit() {
    this.auth.signUp({
      email: this.authCredentials.email,
      password: this.authCredentials.password,
    });
  }
}
