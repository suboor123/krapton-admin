import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Alert } from '../lib/alert';
import { AuthCredentials } from '../types/auth';
import { firebase } from '@firebase/app';
import { ProfileService } from './profile.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private firebaseAuth: AngularFireAuth,
        private router: Router,
        private profile: ProfileService
    ) {}

    async signUp(credentials: AuthCredentials): Promise<void> {
        const { email, password } = credentials;
        return this.firebaseAuth
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                this.router.navigate(['/auth/login']);
            })
            .catch((err) => {
                if (err.message) {
                    Alert.error(err.message);
                }
            });
    }

    async login(credentials: AuthCredentials): Promise<void> {
        const { email, password } = credentials;
        return this.firebaseAuth
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
                const { uid, email } = res.user!;
                localStorage.setItem('user', JSON.stringify({ uid, email }));
                this.redirectUserAfterLogin(uid);
            })
            .catch((err) => {
                if (err.message) {
                    Alert.error(err.message);
                }
            });
    }

    async loginByGoogle(): Promise<void> {
        this.firebaseAuth
            .signInWithPopup(new (firebase as any).auth.GoogleAuthProvider())
            .then((res) => {
                const { uid, email } = res.user!;
                localStorage.setItem('user', JSON.stringify({ uid, email }));
                this.redirectUserAfterLogin(uid);
            })
            .catch((err) => {
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
        this.profile.syncById(userId).subscribe((user) => {
            if (!user.payload.exists()) {
                this.router.navigate(['/profile/edit-profile']);
                return;
            }
            this.router.navigate(['/dashboard']);
        });
    }
}
