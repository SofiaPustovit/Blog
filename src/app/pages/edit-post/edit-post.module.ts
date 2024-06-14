import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPostComponent } from './component/edit-post/edit-post.component';
import { RouterModule } from '@angular/router';
import { ViewPostModule } from '../../modules/view-post/view-post.module';
import { PostService } from '../../services/post.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: EditPostComponent,
      },
    ]),
    ViewPostModule,
  ],
  declarations: [EditPostComponent],
  providers: [PostService],
})
export class EditPostModule {}
