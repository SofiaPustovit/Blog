import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FooterComponent} from "./components/footer/footer.component";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "../../pages/home/components/home/home.component";
import {CreatePostComponent} from "../../pages/create-post/component/create-post/create-post.component";


@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ],
  providers: [],

})

export class FooterModule {}
