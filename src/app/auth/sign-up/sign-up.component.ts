import { Component, OnInit } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup

  /** Hides password by default */
  hide = true

  /* Pattern for password */
  pwdPattern = "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})"

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstNameFormControl: ["", [Validators.required]],
      lastNameFormControl: ["", [Validators.required]],
      emailFormControl: ["", [Validators.required, Validators.email]],
      passwordFormControl: [
        "",
        [Validators.required, Validators.pattern(this.pwdPattern)]
      ]
    })
  }

  get firstNameFormControl() {
    return this.registerForm.get("firstNameFormControl")
  }

  get lastNameFormControl() {
    return this.registerForm.get("lastNameFormControl")
  }

  get emailFormControl() {
    return this.registerForm.get("emailFormControl")
  }

  get passwordFormControl() {
    return this.registerForm.get("passwordFormControl")
  }
}
