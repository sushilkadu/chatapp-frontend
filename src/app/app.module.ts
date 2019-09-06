import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { AuthModule } from "./auth/auth.module"
import { MaterialModule } from "./material/material.module"
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { MiscModule } from "./misc/misc.module"
import { MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material"

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    MaterialModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
