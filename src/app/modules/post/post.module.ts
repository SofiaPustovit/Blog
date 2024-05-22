import { NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PostComponent} from "./components/post/post.component";



@NgModule(
  {
    imports:
      [CommonModule],
    declarations:
      [PostComponent],
    exports: [
      PostComponent
    ]
  }
)

export class PostModule{

}
