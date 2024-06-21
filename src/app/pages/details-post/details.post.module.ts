import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPostComponent } from './components/details-post/details-post.component';
import { RouterLink, RouterModule } from '@angular/router';
import { PostService } from '../../services/post.service';
import { QuillViewHTMLComponent } from 'ngx-quill';
import { PostModule } from '../../modules/post/post.module';

@NgModule({
  imports: [
    CommonModule,
    RouterLink,
    RouterModule.forChild([{ path: ':id', component: DetailsPostComponent }]),
    QuillViewHTMLComponent,
    PostModule,
  ],
  declarations: [DetailsPostComponent],
  exports: [DetailsPostComponent],
  providers: [PostService],
})
export class DetailsPostModule {}
