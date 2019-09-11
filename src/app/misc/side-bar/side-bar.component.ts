import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.css"]
})
export class SideBarComponent implements OnInit {
  private _sideBarTitle = "This is sidebar title really"
  public get sideBarTitle() {
    return this._sideBarTitle
  }
  public set sideBarTitle(value) {
    this._sideBarTitle = value
  }

  constructor() {}

  ngOnInit() {}
}
