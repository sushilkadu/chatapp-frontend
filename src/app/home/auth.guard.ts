import { Injectable } from "@angular/core"
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router"
import { Observable } from "rxjs"
import { TokenService } from "../auth/token-service/token.service"

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // check if token is available
    if (this.tokenService.isLoggedIn()) return true

    this.router.navigate(["auth"], { queryParams: { returnUrl: state.url } })
    return false
  }
}
