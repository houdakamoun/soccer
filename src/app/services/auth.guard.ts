import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { jwtDecode, JwtPayload } from 'jwt-decode';
// Étendre JwtPayload pour inclure la propriété 'user'
interface CustomJwtPayload extends JwtPayload {
  user?: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    tel: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  };
}
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let token = localStorage.getItem('connectedUser');
    if (token) {
      const decoded = jwtDecode<CustomJwtPayload>(token);
      let userRole = decoded?.user?.role;
      let requiredRole = route.data['role'];
      if (requiredRole?.includes(userRole)) {
        console.log(userRole);
        console.log(requiredRole);

        return true;
      } else {
        this.router.navigate(['/unautorized']);
        return false;
      }
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
