import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Alert } from '../lib/alert';
import { AuthCredentials } from '../types/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {}

  async signUp(credentials: AuthCredentials) {
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

  async login(credentials: AuthCredentials) {
    const { email, password } = credentials;
    return this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        const { uid, email } = res.user!;
        localStorage.setItem('user', JSON.stringify({ uid, email }));
        this.router.navigate(['/profile']);
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
    if(u) {
      const user = JSON.parse(u);
      return user.email
    }
  }
}
