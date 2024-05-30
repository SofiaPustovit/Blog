import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CreatePostComponent} from "./component/create-post/create-post.component";
import {RouterModule} from "@angular/router";

@NgModule(
  {
    imports: [
      CommonModule,
      RouterModule.forChild([
        {
          path: '', component: CreatePostComponent
        }
      ])
    ],
    declarations: [CreatePostComponent],
  }
)

export class CreatePostModule {}
