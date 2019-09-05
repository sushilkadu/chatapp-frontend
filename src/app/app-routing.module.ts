import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(mod => mod.AuthModule)
  },

  { path: "**", component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
