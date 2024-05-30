import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EditPostComponent} from "./component/edit-post/edit-post.component";
import {RouterModule} from "@angular/router";


@NgModule(
  {
    imports: [
      CommonModule,
    RouterModule.forChild(
      [
      {
        path: '', component: EditPostComponent
      }
    ])
    ],
    declarations: [EditPostComponent],
  }
)

export class EditPostModule {}
