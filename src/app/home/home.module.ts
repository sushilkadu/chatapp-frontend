import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HomeScreenComponent } from "./home-screen/home-screen.component"
import { HomeRoutingModule } from "./home-routing.module"
import { MiscModule } from '../misc/misc.module';

@NgModule({
  declarations: [HomeScreenComponent],
  imports: [CommonModule, HomeRoutingModule, MiscModule]
})
export class HomeModule {}
