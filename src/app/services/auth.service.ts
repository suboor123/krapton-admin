import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Alert } from '../lib/alert';
import { AuthCredentials } from '../types/auth';
import { firebase } from '@firebase/app';
import { ProfileService } from './profile.service';
import { Spinner } from '../lib/spinner';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private firebaseAuth: AngularFireAuth, private router: Router, private profile: ProfileService) {}

    async signUp(credentials: AuthCredentials): Promise<void> {
        const { email, password } = credentials;
        Spinner.show();
        return this.firebaseAuth
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                Spinner.hide();
                this.router.navigate(['/auth/login']);
            })
            .catch((err) => {
                Spinner.hide();
                if (err.message) {
                    Alert.error(err.message);
                }
            });
    }

    async login(credentials: AuthCredentials): Promise<void> {
        const { email, password } = credentials;
        Spinner.show();
        return this.firebaseAuth
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
                const { uid, email } = res.user!;
                localStorage.setItem('user', JSON.stringify({ uid, email }));
                this.redirectUserAfterLogin(uid);
            })
            .catch((err) => {
                Spinner.hide();
                if (err.message) {
                    Alert.error(err.message);
                }
            });
    }

    async loginByGoogle(): Promise<void> {
        Spinner.show();
        this.firebaseAuth
            .signInWithPopup(new (firebase as any).auth.GoogleAuthProvider())
            .then((res) => {
                const { uid, email, displayName, photoURL, phoneNumber } = res.user!;
                localStorage.setItem(
                    'user',
                    JSON.stringify({
                        uid,
                        email,
                        displayName,
                        photoURL,
                        phoneNumber,
                    })
                );
                this.redirectUserAfterLogin(uid);
            })
            .catch((err) => {
                Spinner.hide();
                if (err.message) {
                    Alert.error(err.message);
                }
            });
    }

    public get isAuthenticated(): boolean {
        return (
            localStorage.getItem('user') !== null &&
            !this.router.url.includes('edit-profile') &&
            !this.router.url.includes('register') &&
            !this.router.url.includes('login')
        );
    }

    public get currentUserEmail(): string | void {
        const u = localStorage.getItem('user');
        if (u) {
            const user = JSON.parse(u);
            return user.email;
        }
    }

    private redirectUserAfterLogin(userId: string): void {
        this.profile.syncById(userId).subscribe((snapshot) => {
            Spinner.hide();
            if (!snapshot.exists()) {
                this.router.navigate(['/profile/edit-profile']);
                return;
            }
            this.router.navigate(['/profile']);
        });
    }
}
