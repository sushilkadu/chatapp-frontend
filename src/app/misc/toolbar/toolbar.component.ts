import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { TokenService } from "src/app/auth/token-service/token.service"

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {
  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit() {}

  onLogout() {
    this.tokenService.deleteToken()
    this.router.navigate(["/auth"])
  }
}
