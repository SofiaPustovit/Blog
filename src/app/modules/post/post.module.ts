import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { QuillViewHTMLComponent } from 'ngx-quill';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { DetailsPostComponent } from '../../pages/details-post/components/details-post/details-post.component';
import { DetailsPostModule } from '../../pages/details-post/details.post.module';

@NgModule({
  imports: [
    CommonModule,
    QuillViewHTMLComponent,
    RouterLink,
    DetailsPostModule,
  ],
  declarations: [PostComponent],
  exports: [PostComponent],
})
export class PostModule {}
