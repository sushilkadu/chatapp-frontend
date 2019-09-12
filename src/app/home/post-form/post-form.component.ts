import { Component, OnInit } from "@angular/core"
import { FormBuilder, Validators, FormGroup } from "@angular/forms"
import { PostService } from "../services/post.service"
import { first } from "rxjs/operators"

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      post: ["", [Validators.required]]
    })
  }

  get post() {
    return this.postForm.get("post")
  }

  onPostForm() {
    this.postService
      .post(this.postForm.value)
      .pipe(first())
      .subscribe(
        post => {
          console.log("Post added successfully: ", post)
        },
        error => {
          console.log("Error posting post: ", error)
        }
      )
  }
}
