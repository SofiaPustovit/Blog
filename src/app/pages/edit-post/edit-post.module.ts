import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPostComponent } from './component/edit-post/edit-post.component';
import { RouterModule } from '@angular/router';
import { ViewPostModule } from '../../modules/view-post/view-post.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EditPostComponent,
      },
    ]),
    ViewPostModule,
  ],
  declarations: [EditPostComponent],
})
export class EditPostModule {}
