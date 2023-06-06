import { Component, OnInit } from '@angular/core';
import { UnsubscribeOnDestroy } from 'src/app/decorators/unsubscribe';
import { AuthService } from 'src/app/services/auth.service';
import { AuthCredentials } from 'src/app/types/auth';
import { debounce } from 'src/app/utils/debounce';

@UnsubscribeOnDestroy()
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    public disbaledSbtmBtn = true;

    public authCredentials: AuthCredentials = {
        email: 'admin@gmail.com',
        password: 'admin@123',
    };

    constructor(public auth: AuthService) {}

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
