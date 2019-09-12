import { Injectable } from "@angular/core"
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http"
import { Observable } from "rxjs"
import { TokenService } from "../auth/token-service/token.service"

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    console.log("Ongoing request: ", req)

    const headerConfig = {
      "Content-Type": "application/json",
      Accept: "application/json"
    }

    const token = this.tokenService.getToken()

    if (token) {
      headerConfig["Authorization"] = `bearer ${token}`
    }

    const _req = req.clone({ setHeaders: headerConfig })

    return next.handle(_req)
  }
}
