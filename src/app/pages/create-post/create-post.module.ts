import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './component/create-post/create-post.component';
import { RouterModule } from '@angular/router';
import { ViewPostModule } from '../../modules/view-post/view-post.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreatePostComponent,
      },
    ]),
    ViewPostModule,
  ],
  declarations: [CreatePostComponent],
  exports: [CreatePostComponent],
})
export class CreatePostModule {}
