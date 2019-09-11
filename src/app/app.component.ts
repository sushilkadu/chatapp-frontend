import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { TokenService } from "./auth/token-service/token.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    if (this.tokenService.isLoggedIn()) {
      this.router.navigate(["/"])
    }
  }
}
