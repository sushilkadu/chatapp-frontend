import { Injectable } from "@angular/core"

const TOKEN = "token"

@Injectable({
  providedIn: "root"
})
export class TokenService {
  constructor() {}

  saveToken(token: string) {
    localStorage.setItem(TOKEN, token)
  }

  getToken(): string {
    return localStorage.getItem(TOKEN)
  }

  deleteToken() {
    localStorage.removeItem(TOKEN)
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
