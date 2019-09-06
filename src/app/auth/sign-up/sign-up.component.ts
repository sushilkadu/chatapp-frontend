import { Component, OnInit, EventEmitter, Output } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { AuthService } from "../auth-service/auth.service"
import { first } from "rxjs/operators"
import { User } from "src/app/model/user"
import { MatDialog } from "@angular/material"
import { ErrorDialogComponent } from "src/app/misc/error-dialog/error-dialog.component"

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  @Output() signedUp = new EventEmitter<User>()

  registerForm: FormGroup

  /** Hides password by default */
  hide = true

  signInRequestInProgress = false

  /* Pattern for password
   * (?=.*[@#$%])
   */
  pwdPattern = "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})"

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern(this.pwdPattern)]]
    })
  }

  get firstName() {
    return this.registerForm.get("firstName")
  }

  get lastName() {
    return this.registerForm.get("lastName")
  }

  get email() {
    return this.registerForm.get("email")
  }

  get password() {
    return this.registerForm.get("password")
  }

  onSignUp() {
    // make progressbar visible
    this.signInRequestInProgress = true

    this.authService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        user => {
          console.log("Successfully subscribed to platform: ", user)
          this.signInRequestInProgress = false

          this.registerForm.reset()

          this.signedUp.emit(user)
          // TODO should emit an event that registration was successful
        },
        error => {
          console.log("Error during subscription: ", error)
          this.signInRequestInProgress = false
          let title
          let description
          if (error.status && error.status === 409) {
            title = "Email already exists!"
            description =
              "You are already registered on the platform, please try forgot password option to recover your password"
          } else {
            title = "Error creating user"
            description =
              "There was an error creating your account, please try again!"
          }

          this.openErrorDialog(title, description)
        }
      )
  }

  openErrorDialog(title: string, description: string) {
    this.dialog.open(ErrorDialogComponent, {
      width: "350px",
      data: { title, description }
    })
  }
}
