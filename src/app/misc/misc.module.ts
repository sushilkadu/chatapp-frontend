import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ErrorDialogComponent } from "./error-dialog/error-dialog.component"
import { MaterialModule } from "../material/material.module"
import { ToolbarComponent } from "./toolbar/toolbar.component"
import { SideBarComponent } from "./side-bar/side-bar.component"

@NgModule({
  declarations: [ErrorDialogComponent, ToolbarComponent, SideBarComponent],
  imports: [CommonModule, MaterialModule],
  entryComponents: [ErrorDialogComponent],
  exports: [ToolbarComponent, SideBarComponent]
})
export class MiscModule {}
