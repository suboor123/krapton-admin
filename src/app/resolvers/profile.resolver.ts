import { Injectable } from '@angular/core';
import {
    Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProfileService } from '../services/profile.service';

@Injectable({
    providedIn: 'root',
})
export class ProfileResolver implements Resolve<boolean> {
    constructor(profile: ProfileService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return of(true);
    }
}
