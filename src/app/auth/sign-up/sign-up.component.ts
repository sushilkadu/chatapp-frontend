import { Component, OnInit } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { AuthService } from "../auth-service/auth.service"
import { first } from "rxjs/operators"

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
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
    private authService: AuthService
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
        },
        error => {
          console.log("Error during subscription: ", error)
          this.signInRequestInProgress = false
        }
      )
  }
}
