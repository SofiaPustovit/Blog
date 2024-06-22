import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { QuillViewHTMLComponent } from 'ngx-quill';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [CommonModule, QuillViewHTMLComponent, RouterLink],
  declarations: [PostComponent],
  exports: [PostComponent],
})
export class PostModule {}
