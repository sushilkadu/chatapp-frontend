import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HomeScreenComponent } from "./home-screen/home-screen.component"
import { HomeRoutingModule } from "./home-routing.module"
import { MiscModule } from "../misc/misc.module"
import { PostFormComponent } from "./post-form/post-form.component"
import { PostsComponent } from "./posts/posts.component"
import { MaterialModule } from "../material/material.module"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"

@NgModule({
  declarations: [HomeScreenComponent, PostFormComponent, PostsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    MiscModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class HomeModule {}
