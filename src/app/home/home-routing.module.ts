import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { HomeScreenComponent } from "./home-screen/home-screen.component"
import { AuthGuard } from "./auth.guard"

const routes: Routes = [
  {
    path: "",
    component: HomeScreenComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
