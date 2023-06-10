import { Injectable } from '@angular/core';
import { DataSnapshot } from '@angular/fire/database/interfaces';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from '../services/profile.service';

@Injectable({
    providedIn: 'root',
})
export class ProfileResolver implements Resolve<Observable<DataSnapshot>> {
    constructor(private profile: ProfileService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<DataSnapshot> {
        return this.profile.getCurrentUser();
    }
}
