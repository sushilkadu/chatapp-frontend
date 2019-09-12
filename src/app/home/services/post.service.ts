import { Injectable } from "@angular/core"
import { Post } from "./post"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private http: HttpClient) {}

  post(post: Post): Observable<Post> {
    return this.http.post<Post>(`${environment.BASE_URL}/posts/add-post`, post)
  }
}
