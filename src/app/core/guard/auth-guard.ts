import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { TOKEN } from '@shared/var/globals';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // if (this.authService.isAuthenticated) {
        if (localStorage.getItem(TOKEN)) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
    // canActivate(
    //     next: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //     return this.auth.isAuthenticated;
    // }
}


