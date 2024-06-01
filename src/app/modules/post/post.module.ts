import { NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PostComponent} from "./components/post/post.component";
import {QuillViewHTMLComponent} from "ngx-quill";



@NgModule(
  {
      imports:
          [CommonModule, QuillViewHTMLComponent],
    declarations:
      [PostComponent],
    exports: [
      PostComponent
    ]
  }
)

export class PostModule{

}
