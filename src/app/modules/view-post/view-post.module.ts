import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPostComponent } from './component/view-post/view-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';
import { PostService } from '../../services/post.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, QuillEditorComponent],
  declarations: [ViewPostComponent],
  exports: [ViewPostComponent],
  providers: [PostService],
})
export class ViewPostModule {}
