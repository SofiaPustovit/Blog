import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./components/home-skip-tests/home.component";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: HomeComponent
      }
    ])
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [],
})

export class HomeModule {}
