import { Injectable } from "@angular/core"
import { CookieService } from "ngx-cookie-service"

const TOKEN = "token"

@Injectable({
  providedIn: "root"
})
export class TokenService {
  constructor(private cookieService: CookieService) {}

  saveToken(token: string) {
    // localStorage.setItem(TOKEN, token)
    this.cookieService.set(TOKEN, token)
  }

  getToken(): string {
    // return localStorage.getItem(TOKEN)
    return this.cookieService.get(TOKEN)
  }

  deleteToken() {
    // localStorage.removeItem(TOKEN)
    this.cookieService.delete(TOKEN)
  }

  getUser(): any {
    if (!this.isLoggedIn()) {
      return false
    } else {
      let payload = this.getToken().split(".")[1]
      payload = window.atob(payload)

      return JSON.parse(payload)
    }
  }

  isLoggedIn() {
    return this.getToken() ? true : false
  }
}
