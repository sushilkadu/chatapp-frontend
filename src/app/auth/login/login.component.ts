import { Component, OnInit } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { filter, map, take, toArray, first } from "rxjs/operators"
import { AuthService } from "../auth-service/auth.service"
import { Token } from "src/app/model/token"
import { MatDialog } from "@angular/material"
import { ErrorDialogComponent } from "src/app/misc/error-dialog/error-dialog.component"
import { TokenService } from "../token-service/token.service"
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  /** Hides password by default */
  hide = true

  /* Pattern for password
   * (?=.*[@#$%])
   */
  pwdPattern = "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})"

  loginError = false

  returnUrl: string

  loginRequestInProgress = false

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dialog: MatDialog,
    private tokenService: TokenService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailFormControl: ["", [Validators.required, Validators.email]],
      passwordFormControl: [
        "",
        [Validators.required, Validators.pattern(this.pwdPattern)]
      ]
    })

    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/"
  }

  get emailFormControl() {
    return this.loginForm.get("emailFormControl")
  }

  get passwordFormControl() {
    return this.loginForm.get("passwordFormControl")
  }

  onLoginClicked() {
    console.log("Calling auth service")

    this.loginRequestInProgress = true

    this.authService
      .login(this.emailFormControl.value, this.passwordFormControl.value)
      .pipe(first())
      .subscribe(
        (token: Token) => {
          this.loginRequestInProgress = false
          this.tokenService.saveToken(token.token)

          this.router.navigate([this.returnUrl])
        },
        error => {
          this.loginRequestInProgress = false

          this.loginError = true
          console.log("Error: " + error.message)
          this.showLoginError(error.status)
        },
        () => console.log("The login observable is completed")
      )
  }

  showLoginError(statusCode: number) {
    let title = "Login Error"
    let description
    switch (statusCode) {
      case 404:
        description =
          "You are no registered on the platform, please sign up on the platform"
        break

      case 401:
        description = "Invalid password"
        break

      default:
        description = "Error during login, please try again"
    }
    this.openErrorDialog(title, description)
  }

  openErrorDialog(title: string, description: string) {
    this.dialog.open(ErrorDialogComponent, {
      width: "350px",
      data: { title, description }
    })
  }
}
