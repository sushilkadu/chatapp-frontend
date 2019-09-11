import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { AuthModule } from "./auth/auth.module"
import { MaterialModule } from "./material/material.module"
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"

import { HomeModule } from "./home/home.module"
import { CookieService } from "ngx-cookie-service"

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    MaterialModule,
    HomeModule
  ],

  bootstrap: [AppComponent],

  providers: [CookieService]
})
export class AppModule {}
