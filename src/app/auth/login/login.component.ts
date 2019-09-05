import { Component, OnInit } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { filter, map, take, toArray, first } from "rxjs/operators"

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  /** Hides password by default */
  hide = true

  /* Pattern for password */
  pwdPattern = "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})"

  loginError = false

  constructor(
    private formBuilder: FormBuilder /*,
    private authService: AuthService*/
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailFormControl: ["", [Validators.required, Validators.email]],
      passwordFormControl: [
        "",
        [Validators.required, Validators.pattern(this.pwdPattern)]
      ]
    })
  }

  get emailFormControl() {
    return this.loginForm.get("emailFormControl")
  }

  get passwordFormControl() {
    return this.loginForm.get("passwordFormControl")
  }

  onLoginClicked() {
    console.log("Calling auth service")

    // this.authService
    //   .login(this.emailFormControl.value, this.passwordFormControl.value)
    //   .pipe(first())
    //   .subscribe(
    //     (user: User) =>
    //       console.log("User is logged in: " + JSON.stringify(user)),
    //     error => {
    //       this.loginError = true
    //       console.log("Error: " + error.message)
    //     },
    //     () => console.log("The login observable is completed")
    //   )
  }
}
