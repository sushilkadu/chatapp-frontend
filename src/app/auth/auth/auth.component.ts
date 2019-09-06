import { Component, OnInit } from "@angular/core"
import { User } from "src/app/model/user"

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  selectedTab = 0

  constructor() {}

  ngOnInit() {}

  onSignedUp(user: User) {
    console.log("User successfully signed up, please change the tab: ", user)
    this.selectedTab = 0
  }
}
