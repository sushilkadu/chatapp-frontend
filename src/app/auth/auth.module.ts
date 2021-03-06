import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { AuthRoutingModule } from "./auth-routing.module"
import { AuthComponent } from "./auth/auth.component"
import { MaterialModule } from "../material/material.module"
import { LoginComponent } from "./login/login.component"
import { SignUpComponent } from "./sign-up/sign-up.component"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"
import { MiscModule } from "../misc/misc.module"
import { CookieService } from "ngx-cookie-service"

@NgModule({
  declarations: [AuthComponent, LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MaterialModule,
    HttpClientModule,
    MiscModule
  ],

  providers: [CookieService]
})
export class AuthModule {}
