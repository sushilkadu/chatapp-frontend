import { Injectable } from "@angular/core"
import { UserRegister } from "src/app/model/user-register"
import { Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment"
import { User } from "src/app/model/user"

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  /**
   * API for user to get authenticated and receive a token
   * @param email Registered e-mail address
   * @param password Password associated with registered email address
   */
  login(email: string, password: string): Observable<UserRegister> {
    return this.http.post<UserRegister>(`${environment.BASE_URL}/login`, {
      email,
      password
    })
  }

  /**
   * API for user to register on the platform
   * @param user user data with which user will be registered
   */
  register(user: UserRegister): Observable<User> {
    return this.http.post<User>(`${environment.BASE_URL}/register`, user)
  }
}
