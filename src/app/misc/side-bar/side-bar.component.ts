import { Component, OnInit } from "@angular/core"
import { messages } from "./side-bar-config"

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.css"]
})
export class SideBarComponent implements OnInit {
  config = messages

  constructor() {}

  ngOnInit() {}
}
